import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/endpoints";
import { Category } from "../../types/api";

export const useFetchCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
