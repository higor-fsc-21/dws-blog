import { createContext, useCallback, useContext, useState } from "react";
import { DropdownOption } from "./DropdownOption/DropdownOption";

interface DropdownContextType {
  isOpen: boolean;
  isLoading: boolean;
  options: DropdownOption[];
  selectedOptions: DropdownOption[];
  closeDropdown: () => void;
  toggleDropdown: () => void;
  handleOptionSelect: (option: DropdownOption) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

interface DropdownProviderProps {
  isLoading: boolean;
  children: React.ReactNode;
  options: DropdownOption[];
  selectedOptions: DropdownOption[];
  onChange: (selected: DropdownOption[]) => void;
}

export const DropdownProvider = ({
  isLoading,
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
    (option: DropdownOption) => {
      const isSelected = selectedOptions.some((item) => item.id === option.id);
      let newSelected: DropdownOption[];

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
    isLoading,
    closeDropdown,
    toggleDropdown,
    selectedOptions,
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
