import React, { useMemo, useState } from "react";
import { useFetchPosts } from "../../hooks/queries";
import useResponsive from "../../hooks/useResponsive";
import styles from "./HomePage.module.scss";
import {
  PageHeader,
  PostsList,
  MobileFilters,
  DesktopFilters,
} from "./components";
import { AppliedFilters } from "../../types/app";
import { Post } from "../../types/api";

const sortPostsByOrder = (posts: Post[], order: "newest" | "oldest") => {
  return posts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return order === "newest"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
};

const HomePage: React.FC = () => {
  const { isMobile, isDesktop } = useResponsive();
  const { data, isLoading, isError } = useFetchPosts();

  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({});

  const handleApplyFilters = (filters: Partial<AppliedFilters>) => {
    setAppliedFilters((prev) => ({ ...prev, ...filters }));
  };

  const posts = useMemo(() => {
    if (!data) return [];
    const { authorsIds, categoriesIds, order } = appliedFilters;

    if (!authorsIds?.length && !categoriesIds?.length)
      return sortPostsByOrder(data, order ?? "newest");

    const filteredPosts = data.filter((post) => {
      const matchesAuthor =
        !authorsIds?.length || authorsIds.includes(post.authorId);
      const matchesCategory =
        !categoriesIds?.length ||
        post.categories.some((category) => categoriesIds.includes(category.id));

      return matchesAuthor && matchesCategory;
    });

    return sortPostsByOrder(filteredPosts, order ?? "newest");
  }, [data, appliedFilters]);

  return (
    <div>
      {isDesktop && <PageHeader onApplyFilters={handleApplyFilters} />}
      <div className={styles.content}>
        {isMobile && <MobileFilters onApplyFilters={handleApplyFilters} />}
        {isDesktop && <DesktopFilters onApplyFilters={handleApplyFilters} />}
        <PostsList posts={posts} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};

export default HomePage;
