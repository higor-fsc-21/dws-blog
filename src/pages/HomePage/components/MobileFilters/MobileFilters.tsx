import React, { useCallback } from "react";
import { Dropdown } from "../../../../components/Dropdown";
import { SortButton } from "../../../../components/buttons";
import { useFilters } from "../../../../hooks/useFilters";
import styles from "./MobileFilters.module.scss";
import { FilterOption } from "../../../../types/app";

const MobileFilters: React.FC = () => {
  const {
    isLoadingCategories,
    isLoadingAuthors,
    categoryOptions,
    authorOptions,
    selectedCategoryOptions,
    selectedAuthorOptions,
    setSelectedAuthorOptions,
    setSelectedCategoryOptions,
  } = useFilters({});

  const handleCategoryDropdownChange = useCallback(
    (options: FilterOption[]) => setSelectedCategoryOptions(options),
    [setSelectedCategoryOptions]
  );

  const handleAuthorDropdownChange = useCallback(
    (options: FilterOption[]) => setSelectedAuthorOptions(options),
    [setSelectedAuthorOptions]
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
      <SortButton initialOrder="newest" />
    </div>
  );
};

export default MobileFilters;
