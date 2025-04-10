import styles from "./DropdownOption.module.scss";
import { useDropdown } from "../DropdownContext";
import { FilterOption } from "../../../types/app";

export type DropdownOption = FilterOption;

interface DropdownOptionProps {
  option: DropdownOption;
}

export const DropdownOption = ({ option }: DropdownOptionProps) => {
  const { selectedOptions, handleOptionSelect } = useDropdown();
  const isSelected = selectedOptions.some((item) => item.id === option.id);

  return (
    <button
      type="button"
      onClick={() => handleOptionSelect(option)}
      className={`${styles.option} ${isSelected ? styles.selected : ""}`}
    >
      {option.label}
    </button>
  );
};
