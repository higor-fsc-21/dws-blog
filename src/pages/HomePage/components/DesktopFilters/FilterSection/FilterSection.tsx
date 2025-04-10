import React from "react";
import styles from "./FilterSection.module.scss";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onOptionClick: (option: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onOptionClick,
}) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.optionsList}>
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.optionItem} ${
              selectedOptions.includes(option) ? styles.selected : ""
            }`}
            onClick={() => onOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
