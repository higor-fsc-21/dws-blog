import React from "react";
import styles from "./FilterSection.module.scss";
import { FilterOption } from "../../../../../types/app";

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: FilterOption[];
  onOptionClick: (option: FilterOption) => void;
  isLoading?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onOptionClick,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  const isSelected = (option: FilterOption) => {
    return selectedOptions.some((item) => item.id === option.id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.optionsList}>
        {options.map((option) => (
          <li
            key={option.id}
            className={`${styles.optionItem} ${
              isSelected(option) ? styles.selected : ""
            }`}
            onClick={() => onOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
