import { useCallback } from "react";
import { Dropdown } from "../../../../components/Dropdown";
import { SortButton } from "../../../../components/buttons";
import { useFilters } from "../../../../hooks/useFilters";
import { AppliedFilters, FilterOption } from "../../../../types/app";
import styles from "./MobileFilters.module.scss";

interface MobileFiltersProps {
  appliedFilters?: AppliedFilters;
  onApplyFilters: (filters: Partial<AppliedFilters>) => void;
}

const MobileFilters = ({
  appliedFilters,
  onApplyFilters,
}: MobileFiltersProps) => {
  const {
    isLoadingCategories,
    isLoadingAuthors,
    categoryOptions,
    authorOptions,
    selectedCategoryOptions,
    selectedAuthorOptions,
    setSelectedCategoryOptions,
    setSelectedAuthorOptions,
  } = useFilters({ appliedFilters, onApplyFilters });

  const handleCategoryDropdownChange = useCallback(
    (options: FilterOption[]) => {
      setSelectedCategoryOptions(options);
      onApplyFilters({
        categoriesIds: options.map((opt) => opt.id),
        authorsIds: selectedAuthorOptions.map((opt) => opt.id),
      });
    },
    [setSelectedCategoryOptions, onApplyFilters, selectedAuthorOptions],
  );

  const handleAuthorDropdownChange = useCallback(
    (options: FilterOption[]) => {
      setSelectedAuthorOptions(options);
      onApplyFilters({
        authorsIds: options.map((opt) => opt.id),
        categoriesIds: selectedCategoryOptions.map((opt) => opt.id),
      });
    },
    [setSelectedAuthorOptions, onApplyFilters, selectedCategoryOptions],
  );

  const handleSortChange = useCallback(
    (order: "newest" | "oldest") => onApplyFilters({ order }),
    [onApplyFilters],
  );

  return (
    <div className={styles.mobileFilters}>
      <Dropdown
        placeholder="Category"
        options={categoryOptions}
        isLoading={isLoadingCategories}
        onChange={handleCategoryDropdownChange}
        selectedOptions={selectedCategoryOptions}
      />
      <Dropdown
        placeholder="Author"
        options={authorOptions}
        isLoading={isLoadingAuthors}
        onChange={handleAuthorDropdownChange}
        selectedOptions={selectedAuthorOptions}
      />
      <SortButton
        onOrderChange={handleSortChange}
        order={appliedFilters?.order ?? "newest"}
      />
    </div>
  );
};

export default MobileFilters;
