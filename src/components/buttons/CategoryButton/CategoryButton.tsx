import { ButtonHTMLAttributes, useMemo } from "react";
import styles from "./CategoryButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";

type AllowedHtmlButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

type CategoryButtonProps = AllowedHtmlButtonProps & {
  isOpen?: boolean;
  selectedCategories?: string[];
};

export const CategoryButton = ({
  isOpen = false,
  selectedCategories = [],
  ...defaultButtonProps
}: CategoryButtonProps) => {
  const buttonClasses = [
    styles.button,
    selectedCategories.length > 0 && styles.selected,
    isOpen ? styles.open : "",
  ].join(" ");

  const label = useMemo(() => {
    if (selectedCategories.length === 0) return "Category";
    return selectedCategories.join(", ");
  }, [selectedCategories]);

  return (
    <button className={buttonClasses} {...defaultButtonProps}>
      <span>{label}</span>

      <DynamicIcon
        name="chevron-down"
        size={IconSize.MEDIUM}
        className={isOpen ? styles.iconOpen : ""}
      />
    </button>
  );
};
