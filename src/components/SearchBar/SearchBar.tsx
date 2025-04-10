import { InputHTMLAttributes, forwardRef } from "react";
import { SearchButton } from "../buttons";
import styles from "./SearchBar.module.scss";

type SearchBarProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onSubmit?: () => void;
  onChange?: (value: string) => void;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onSubmit, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") onSubmit?.();
    };

    return (
      <div className={styles.searchContainer}>
        <input
          ref={ref}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.searchBar}
          {...props}
        />
        <SearchButton onClick={onSubmit} className={styles.button} />
      </div>
    );
  }
);
