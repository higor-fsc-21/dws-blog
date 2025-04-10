import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/endpoints";
import { Post } from "../../types/api";

export const useFetchPosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
