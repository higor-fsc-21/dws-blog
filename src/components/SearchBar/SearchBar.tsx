import { InputHTMLAttributes, forwardRef, useRef, useState } from "react";
import { SearchButton } from "../buttons";
import styles from "./SearchBar.module.scss";

type SearchBarProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange" | "onSearch"
> & {
  onSearch?: (value: string) => void;
  isMobileView?: boolean;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onSearch, isMobileView = true, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    const isSearchVisible = isMobileView || isVisible;
    const visibilityClass = isSearchVisible ? "" : styles.hidden;

    const hideSearchBar = () => setIsVisible(false);
    const showSearchBar = () => setIsVisible(true);

    const handleSearch = () => {
      if (!isSearchVisible) return showSearchBar();

      hideSearchBar();
      onSearch?.(inputRef.current?.value ?? "");
    };

    return (
      <div className={styles.searchContainer}>
        <input
          ref={ref}
          type="text"
          onBlur={hideSearchBar}
          className={`${styles.searchBar} ${visibilityClass}`}
          {...props}
        />
        <SearchButton onClick={handleSearch} className={styles.button} />
      </div>
    );
  }
);
