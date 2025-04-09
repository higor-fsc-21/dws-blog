import { InputHTMLAttributes, forwardRef, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { SearchButton } from "../buttons";

type SearchBarProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange" | "onSearch"
> & {
  onSearch?: (value: string) => void;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onSearch, className = "", ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
      onSearch?.(inputRef.current?.value ?? "");
    };

    return (
      <div className={`${styles.searchContainer} ${className}`}>
        <input
          ref={ref}
          type="text"
          className={styles.searchInput}
          {...props}
        />
        <SearchButton onClick={() => handleSearch()} />
      </div>
    );
  }
);
