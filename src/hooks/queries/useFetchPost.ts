import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../../services/endpoints";

export const useFetchPost = (postId: string) => {
  return useQuery({
    enabled: !!postId,
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });
};
