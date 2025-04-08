import { ButtonHTMLAttributes } from "react";
import styles from "./SearchButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";

type SearchButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

export const SearchButton = ({ ...defaultButtonProps }: SearchButtonProps) => {
  return (
    <button className={styles.searchButton} {...defaultButtonProps}>
      <DynamicIcon name="search" size={IconSize.MEDIUM} />
    </button>
  );
};
