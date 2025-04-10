import { useCallback } from "react";
import { Dropdown } from "../../../../components/Dropdown";
import { SortButton } from "../../../../components/buttons";
import { useFilters } from "../../../../hooks/useFilters";
import { AppliedFilters, FilterOption } from "../../../../types/app";
import styles from "./MobileFilters.module.scss";

interface MobileFiltersProps {
  onApplyFilters: (filters: Partial<AppliedFilters>) => void;
}

const MobileFilters = ({ onApplyFilters }: MobileFiltersProps) => {
  const {
    isLoadingCategories,
    isLoadingAuthors,
    categoryOptions,
    authorOptions,
    selectedCategoryOptions,
    selectedAuthorOptions,
    setSelectedAuthorOptions,
    setSelectedCategoryOptions,
  } = useFilters({ onApplyFilters });

  const handleCategoryDropdownChange = useCallback(
    (options: FilterOption[]) => setSelectedCategoryOptions(options),
    [setSelectedCategoryOptions]
  );

  const handleAuthorDropdownChange = useCallback(
    (options: FilterOption[]) => setSelectedAuthorOptions(options),
    [setSelectedAuthorOptions]
  );

  const handleSortChange = useCallback(
    (order: "newest" | "oldest") => onApplyFilters({ order }),
    [onApplyFilters]
  );

  return (
    <div className={styles.mobileFilters}>
      <Dropdown
        options={categoryOptions}
        isLoading={isLoadingCategories}
        onChange={handleCategoryDropdownChange}
        selectedOptions={selectedCategoryOptions}
      />
      <Dropdown
        options={authorOptions}
        isLoading={isLoadingAuthors}
        onChange={handleAuthorDropdownChange}
        selectedOptions={selectedAuthorOptions}
      />
      <SortButton initialOrder="newest" onOrderChange={handleSortChange} />
    </div>
  );
};

export default MobileFilters;
