import api from "./api";
import { Post, Author, Category } from "../types/api";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts/");
  return response.data;
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
};

export const fetchAuthors = async (): Promise<Author[]> => {
  const response = await api.get<Author[]>("/authors/");
  return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>("/categories/");
  return response.data;
};
