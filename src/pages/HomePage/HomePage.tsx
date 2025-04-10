import React from "react";
import { useFetchPosts } from "../../hooks/queries";
import useResponsive from "../../hooks/useResponsive";
import styles from "./HomePage.module.scss";
import {
  PageHeader,
  PostsList,
  MobileFilters,
  DesktopFilters,
} from "./components";

const HomePage: React.FC = () => {
  const { isMobile, isDesktop } = useResponsive();

  const { data: posts, isLoading, isError } = useFetchPosts();

  return (
    <div>
      {isDesktop && <PageHeader />}
      <div className={styles.content}>
        {isMobile && <MobileFilters />}
        {isDesktop && <DesktopFilters />}
        <PostsList posts={posts} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};

export default HomePage;
