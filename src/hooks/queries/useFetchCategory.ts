import { useQuery } from "@tanstack/react-query";
import { fetchCategoryById } from "../../services/endpoints";
import { Category } from "../../types/api";

export const useFetchCategory = (id: string) => {
  return useQuery<Category, Error>({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryById(id),
    enabled: !!id,
  });
};
