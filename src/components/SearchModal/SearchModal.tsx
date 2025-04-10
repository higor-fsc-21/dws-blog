import { ArrowLeftIcon, X } from "lucide-react";
import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./SearchModal.module.scss";

interface SearchModalProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  isOpen?: boolean;
  onClose?: () => void;
  onClear?: () => void;
  onSubmit?: () => void;
  onChange?: (value: string) => void;
}

export const SearchModal = forwardRef<HTMLInputElement, SearchModalProps>(
  ({ onSubmit, onChange, onClear, onClose, isOpen, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleSubmit = () => {
      onClear?.();
      onClose?.();
      onSubmit?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSubmit();
    };

    if (!isOpen) return null;

    return (
      <div className={styles.modalContainer}>
        <div className={styles.searchBar}>
          <ArrowLeftIcon className={styles.submitIcon} onClick={handleSubmit} />
          <input
            ref={ref}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.modalInput}
            {...props}
          />
          <X onClick={onClear} className={styles.closeIcon} />
        </div>

        <hr className={styles.divider} />
      </div>
    );
  }
);

SearchModal.displayName = "SearchModal";
