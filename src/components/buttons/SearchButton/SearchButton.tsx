import { ButtonHTMLAttributes } from "react";
import styles from "./SearchButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";

type SearchButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  className?: string;
};

export const SearchButton = ({
  className,
  ...defaultButtonProps
}: SearchButtonProps) => {
  return (
    <button
      className={`${styles.searchButton} ${className}`}
      {...defaultButtonProps}
    >
      <DynamicIcon name="search" size={IconSize.MEDIUM} />
    </button>
  );
};
