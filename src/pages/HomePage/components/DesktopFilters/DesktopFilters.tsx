import React, { useCallback } from "react";
import { MainButton } from "../../../../components/buttons/MainButton";
import FilterSection from "./FilterSection";
import styles from "./DesktopFilters.module.scss";
import { SlidersHorizontal } from "lucide-react";
import { useFilters } from "../../../../hooks/useFilters";
import { AppliedFilters, FilterOption } from "../../../../types/app";

const FILTER_ICON_SIZE = 20;

const toggleOption = (
  option: FilterOption,
  currentSelection: FilterOption[],
  setter: React.Dispatch<React.SetStateAction<FilterOption[]>>
) => {
  const index = currentSelection.findIndex((item) => item.id === option.id);
  if (index > -1) {
    setter(currentSelection.filter((item) => item.id !== option.id));
  } else {
    setter([...currentSelection, option]);
  }
};

interface DesktopFiltersProps {
  onApplyFilters: (filters: Partial<AppliedFilters>) => void;
}

const DesktopFilters: React.FC<DesktopFiltersProps> = ({ onApplyFilters }) => {
  const {
    isLoadingCategories,
    isLoadingAuthors,
    categoryOptions,
    authorOptions,
    selectedCategoryOptions,
    selectedAuthorOptions,
    setSelectedAuthorOptions,
    setSelectedCategoryOptions,
    applyFilters,
  } = useFilters({ onApplyFilters });

  const handleCategorySelect = useCallback(
    (option: FilterOption) => {
      toggleOption(option, selectedCategoryOptions, setSelectedCategoryOptions);
    },
    [selectedCategoryOptions, setSelectedCategoryOptions]
  );

  const handleAuthorSelect = useCallback(
    (option: FilterOption) => {
      toggleOption(option, selectedAuthorOptions, setSelectedAuthorOptions);
    },
    [selectedAuthorOptions, setSelectedAuthorOptions]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        <SlidersHorizontal size={FILTER_ICON_SIZE} />
        <span>Filters</span>
      </h2>

      <FilterSection
        title="Category"
        options={categoryOptions}
        isLoading={isLoadingCategories}
        selectedOptions={selectedCategoryOptions}
        onOptionClick={handleCategorySelect}
      />

      <FilterSection
        title="Author"
        options={authorOptions}
        isLoading={isLoadingAuthors}
        selectedOptions={selectedAuthorOptions}
        onOptionClick={handleAuthorSelect}
      />

      <MainButton fullWidth variant="primary" onClick={applyFilters}>
        Apply filters
      </MainButton>
    </div>
  );
};

export default DesktopFilters;
