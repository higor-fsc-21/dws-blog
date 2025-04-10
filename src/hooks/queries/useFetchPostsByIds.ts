import { useQuery } from "@tanstack/react-query";
import { getPostsByIds } from "../../services/endpoints";

export const useFetchPostsByIds = (postIds: string[]) => {
  return useQuery({
    queryKey: ["posts", "byIds", postIds],
    queryFn: () => getPostsByIds(postIds),
    enabled: postIds.length > 0,
  });
};
