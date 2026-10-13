import { useRef } from "react";
import styles from "./Dropdown.module.scss";
import { CategoryButton } from "../buttons";
import { DropdownContent } from "./DropdownContent/DropdownContent";
import { DropdownOption } from "./DropdownOption/DropdownOption";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropdownProvider, useDropdown } from "./DropdownContext";

interface DropdownProps {
  placeholder?: string;
  isLoading?: boolean;
  options: DropdownOption[];
  selectedOptions?: DropdownOption[];
  onChange?: (selected: DropdownOption[]) => void;
}

const DropdownInner = ({ placeholder = "Category" }: { placeholder?: string }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    selectedOptions,
    isLoading,
    isOpen,
    toggleDropdown,
    closeDropdown,
    clearSelection,
  } = useDropdown();

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className={styles.container}>
      <CategoryButton
        isOpen={isOpen}
        disabled={isLoading}
        placeholder={placeholder}
        onClick={toggleDropdown}
        onClear={selectedOptions.length > 0 ? clearSelection : undefined}
        selectedCategories={selectedOptions.map((opt) => opt.label)}
      />
      <DropdownContent />
    </div>
  );
};

export const Dropdown = ({
  placeholder = "Category",
  options,
  isLoading = false,
  onChange = () => {},
  selectedOptions = [],
}: DropdownProps) => {
  return (
    <DropdownProvider
      options={options}
      onChange={onChange}
      isLoading={isLoading}
      selectedOptions={selectedOptions}
    >
      <DropdownInner placeholder={placeholder} />
    </DropdownProvider>
  );
};
