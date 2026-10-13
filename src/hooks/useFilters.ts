import { useState, useCallback, useMemo, useEffect } from "react";
import { useFetchCategories, useFetchAuthors } from "./queries";
import { AppliedFilters, FilterOption } from "../types/app";
import { Category, Author } from "../types/api";

interface UseFiltersProps {
  appliedFilters?: AppliedFilters;
  onApplyFilters?: (filters: Partial<AppliedFilters>) => void;
}

export const useFilters = ({
  appliedFilters,
  onApplyFilters,
}: UseFiltersProps = {}) => {
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    FilterOption[]
  >([]);
  const [selectedAuthorOptions, setSelectedAuthorOptions] = useState<
    FilterOption[]
  >([]);

  const { data: authorsData, isLoading: isLoadingAuthors } = useFetchAuthors();
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useFetchCategories();

  useEffect(() => {
    if (!categoriesData?.length) return;
    const ids = appliedFilters?.categoriesIds;
    if (ids && ids.length > 0) {
      setSelectedCategoryOptions(
        categoriesData
          .filter((cat: Category) => ids.includes(cat.id))
          .map((cat: Category) => ({ id: cat.id, label: cat.name }))
      );
    } else if (ids && ids.length === 0) {
      setSelectedCategoryOptions([]);
    }
  }, [categoriesData, appliedFilters?.categoriesIds]);

  useEffect(() => {
    if (!authorsData?.length) return;
    const ids = appliedFilters?.authorsIds;
    if (ids && ids.length > 0) {
      setSelectedAuthorOptions(
        authorsData
          .filter((auth: Author) => ids.includes(auth.id))
          .map((auth: Author) => ({ id: auth.id, label: auth.name }))
      );
    } else if (ids && ids.length === 0) {
      setSelectedAuthorOptions([]);
    }
  }, [authorsData, appliedFilters?.authorsIds]);

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
