import api from "./api";
import { Post, Author, Category } from "../types/api";
import { getLastUserPosts } from "../utils/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts/");
  return response.data;
};

interface FetchPostByIdResponse {
  post: Post;
  lastPosts: Post[];
}

export const fetchPostById = async (
  id: string
): Promise<FetchPostByIdResponse> => {
  const [post, posts] = await Promise.all([
    api.get<Post>(`/posts/${id}`),
    fetchPosts(),
  ]);

  const lastPosts = getLastUserPosts({
    posts,
    author: post.data.author,
    excludePostId: post.data.id,
  });

  return { post: post.data, lastPosts };
};

export const fetchAuthors = async (): Promise<Author[]> => {
  const response = await api.get<Author[]>("/authors/");
  return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>("/categories/");
  return response.data;
};
