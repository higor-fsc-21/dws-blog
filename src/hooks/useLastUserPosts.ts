import { useMemo } from "react";
import { Post, Author } from "../types/api";

const sortPostsByDate = (posts: Post[]) => {
  return [...posts].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};

const filterPostsByUser = (
  posts: Post[],
  authorId: string,
  excludePostId?: string
) => {
  return posts.filter(
    (post) => post.author.id === authorId && post.id !== excludePostId
  );
};

export const useLastUserPosts = (posts: Post[] | undefined) => {
  const getLastUserPosts = useMemo(
    () =>
      (author: Author, excludePostId?: string, limit: number = 3) => {
        if (!posts) return [];

        const userPosts = filterPostsByUser(posts, author.id, excludePostId);
        const sortedUserPosts = sortPostsByDate(userPosts);
        return sortedUserPosts.slice(0, limit);
      },
    [posts]
  );

  return { getLastUserPosts };
};
