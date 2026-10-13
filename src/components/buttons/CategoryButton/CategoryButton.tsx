import { ButtonHTMLAttributes, useMemo } from "react";
import styles from "./CategoryButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";

type AllowedHtmlButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "disabled"
>;

type CategoryButtonProps = AllowedHtmlButtonProps & {
  isOpen?: boolean;
  placeholder?: string;
  selectedCategories?: string[];
  onClear?: () => void;
};

export const CategoryButton = ({
  isOpen = false,
  placeholder = "Category",
  selectedCategories = [],
  onClear,
  ...defaultButtonProps
}: CategoryButtonProps) => {
  const hasSelected = selectedCategories.length > 0;
  const buttonClasses = [
    styles.button,
    hasSelected && styles.selected,
    isOpen ? styles.open : "",
  ].join(" ");

  const label = useMemo(() => {
    if (!hasSelected) return placeholder;
    return selectedCategories.join(", ");
  }, [hasSelected, placeholder, selectedCategories]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.stopPropagation();
      onClear?.();
    }
  };

  return (
    <button
      className={buttonClasses}
      data-testid="category-button"
      {...defaultButtonProps}
    >
      <span>{label}</span>

      {hasSelected && onClear ? (
        <span
          role="button"
          tabIndex={0}
          aria-label="Clear selection"
          className={styles.clearIcon}
          onClick={handleClear}
          onKeyDown={handleKeyDown}
        >
          <DynamicIcon name="x" size={IconSize.SMALL} />
        </span>
      ) : (
        <DynamicIcon
          name="chevron-down"
          size={IconSize.MEDIUM}
          className={isOpen ? styles.iconOpen : ""}
        />
      )}
    </button>
  );
};
