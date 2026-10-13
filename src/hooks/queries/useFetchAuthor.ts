import { useQuery } from "@tanstack/react-query";
import { fetchAuthorById } from "../../services/endpoints";
import { Author } from "../../types/api";

export const useFetchAuthor = (id: string) => {
  return useQuery<Author, Error>({
    queryKey: ["author", id],
    queryFn: () => fetchAuthorById(id),
    enabled: !!id,
  });
};
