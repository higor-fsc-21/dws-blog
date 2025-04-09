import styles from "./Dropdown.module.scss";

export interface DropdownOptionType {
  id: string | number;
  label: string;
}

interface DropdownOptionProps {
  option: DropdownOptionType;
  isSelected: boolean;
  onSelect: (option: DropdownOptionType) => void;
}

export const DropdownOption = ({
  option,
  isSelected,
  onSelect,
}: DropdownOptionProps) => {
  return (
    <button
      type="button"
      className={`${styles.option} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(option)}
    >
      {option.label}
    </button>
  );
};
