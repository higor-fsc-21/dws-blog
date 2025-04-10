import { useState, useCallback, useMemo } from "react";
import { useFetchCategories } from "./queries/useFetchCategories";
import { useFetchAuthors } from "./queries/useFetchAuthors";
import { FilterOption } from "../types/app";
import { Category, Author } from "../types/api";

interface UseFiltersProps {
  onApplyFilters?: (filters: {
    categories: string[];
    authors: string[];
  }) => void;
}

export const useFilters = ({ onApplyFilters }: UseFiltersProps = {}) => {
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    FilterOption[]
  >([]);
  const [selectedAuthorOptions, setSelectedAuthorOptions] = useState<
    FilterOption[]
  >([]);

  const { data: authorsData, isLoading: isLoadingAuthors } = useFetchAuthors();
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useFetchCategories();

  const categoryOptions: FilterOption[] = useMemo(
    () =>
      categoriesData?.map((cat: Category) => ({
        id: cat.id,
        label: cat.name,
      })) || [],
    [categoriesData]
  );
  const authorOptions: FilterOption[] = useMemo(
    () =>
      authorsData?.map((auth: Author) => ({ id: auth.id, label: auth.name })) ||
      [],
    [authorsData]
  );

  const applyFilters = useCallback(() => {
    onApplyFilters?.({
      categories: selectedCategoryOptions.map((opt) => opt.label),
      authors: selectedAuthorOptions.map((opt) => opt.label),
    });
  }, [onApplyFilters, selectedCategoryOptions, selectedAuthorOptions]);

  return {
    isLoadingCategories,
    isLoadingAuthors,
    categoryOptions,
    authorOptions,
    selectedCategoryOptions,
    selectedAuthorOptions,
    setSelectedCategoryOptions,
    setSelectedAuthorOptions,
    applyFilters,
  };
};
