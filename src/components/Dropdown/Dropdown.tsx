import { useRef } from "react";
import styles from "./Dropdown.module.scss";
import { CategoryButton } from "../buttons";
import { DropdownContent } from "./DropdownContent/DropdownContent";
import { DropdownOptionType } from "./DropdownOption/DropdownOption";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropdownProvider, useDropdown } from "./DropdownContext";

interface DropdownProps {
  options: DropdownOptionType[];
  selectedOptions?: DropdownOptionType[];
  onChange?: (selected: DropdownOptionType[]) => void;
}

const DropdownInner = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedOptions, isOpen, toggleDropdown, closeDropdown } =
    useDropdown();

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className={styles.container}>
      <CategoryButton
        isOpen={isOpen}
        onClick={toggleDropdown}
        selectedCategories={selectedOptions.map((opt) => opt.label)}
      />
      <DropdownContent />
    </div>
  );
};

export const Dropdown = ({
  options,
  onChange = () => {},
  selectedOptions = [],
}: DropdownProps) => {
  return (
    <DropdownProvider
      options={options}
      onChange={onChange}
      selectedOptions={selectedOptions}
    >
      <DropdownInner />
    </DropdownProvider>
  );
};
