import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../../services/endpoints";
import { getLastUserPosts } from "../../utils/posts";
import { useFetchPosts } from "./useFetchPosts";

export const useFetchPost = (postId: string) => {
  const postQuery = useQuery({
    enabled: !!postId,
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });
  // Shares the ["posts"] cache with the home page instead of refetching the list.
  const postsQuery = useFetchPosts();

  const post = postQuery.data;
  const posts = postsQuery.data;

  const data = useMemo(() => {
    if (!post) return undefined;
    const lastPosts = posts
      ? getLastUserPosts({ posts, author: post.author, excludePostId: post.id })
      : [];
    return { post, lastPosts };
  }, [post, posts]);

  return {
    data,
    isLoading: postQuery.isLoading || postsQuery.isLoading,
    isError: postQuery.isError || postsQuery.isError,
  };
};
