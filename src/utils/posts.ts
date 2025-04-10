import { Author, Post } from "../types/api";

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

interface GetLastUserPostsParams {
  posts: Post[];
  author: Author;
  limit?: number;
  excludePostId?: string;
}

export const getLastUserPosts = ({
  posts,
  author,
  limit = 3,
  excludePostId,
}: GetLastUserPostsParams) => {
  if (!posts) return [];

  const userPosts = filterPostsByUser(posts, author.id, excludePostId);
  const sortedUserPosts = sortPostsByDate(userPosts);
  return sortedUserPosts.slice(0, limit);
};
