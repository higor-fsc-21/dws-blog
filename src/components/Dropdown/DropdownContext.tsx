import { createContext, useCallback, useContext, useState } from "react";
import { DropdownOptionType } from "./DropdownOption/DropdownOption";

interface DropdownContextType {
  isOpen: boolean;
  options: DropdownOptionType[];
  selectedOptions: DropdownOptionType[];
  toggleDropdown: () => void;
  closeDropdown: () => void;
  handleOptionSelect: (option: DropdownOptionType) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

interface DropdownProviderProps {
  children: React.ReactNode;
  options: DropdownOptionType[];
  selectedOptions: DropdownOptionType[];
  onChange: (selected: DropdownOptionType[]) => void;
}

export const DropdownProvider = ({
  children,
  options,
  selectedOptions,
  onChange,
}: DropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOptionSelect = useCallback(
    (option: DropdownOptionType) => {
      const isSelected = selectedOptions.some((item) => item.id === option.id);
      let newSelected: DropdownOptionType[];

      if (isSelected) {
        newSelected = selectedOptions.filter((item) => item.id !== option.id);
      } else {
        newSelected = [...selectedOptions, option];
      }

      onChange(newSelected);
    },
    [selectedOptions, onChange]
  );

  const value = {
    isOpen,
    options,
    selectedOptions,
    toggleDropdown,
    closeDropdown,
    handleOptionSelect,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
};
