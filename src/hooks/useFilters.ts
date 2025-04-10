import { useState, useCallback, useMemo } from "react";
import { useFetchCategories, useFetchAuthors } from "./queries";
import { AppliedFilters, FilterOption } from "../types/app";
import { Category, Author } from "../types/api";

interface UseFiltersProps {
  onApplyFilters?: (filters: Partial<AppliedFilters>) => void;
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

  const categoryOptions: FilterOption[] = useMemo(() => {
    if (!categoriesData?.length) return [];
    return categoriesData.map((cat: Category) => ({
      id: cat.id,
      label: cat.name,
    }));
  }, [categoriesData]);

  const authorOptions: FilterOption[] = useMemo(() => {
    if (!authorsData?.length) return [];
    return authorsData.map((auth: Author) => ({
      id: auth.id,
      label: auth.name,
    }));
  }, [authorsData]);

  const applyFilters = useCallback(() => {
    onApplyFilters?.({
      authorsIds: selectedAuthorOptions.map((opt) => opt.id),
      categoriesIds: selectedCategoryOptions.map((opt) => opt.id),
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
