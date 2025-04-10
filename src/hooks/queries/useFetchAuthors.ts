import { useQuery } from "@tanstack/react-query";
import { fetchAuthors } from "../../services/endpoints";
import { Author } from "../../types/api";

export const useFetchAuthors = () => {
  return useQuery<Author[], Error>({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
  });
};
