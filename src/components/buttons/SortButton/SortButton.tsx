import styles from "./SortButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";
type SortOrder = "newest" | "oldest";

interface SortButtonProps {
  order?: SortOrder;
  onOrderChange?: (order: SortOrder) => void;
}

export const SortButton = ({
  onOrderChange,
  order = "newest",
}: SortButtonProps) => {
  const label = order === "newest" ? "Newest first" : "Oldest first";

  const handleClick = () => {
    const newOrder = order === "newest" ? "oldest" : "newest";
    onOrderChange?.(newOrder);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.sortButton}
      aria-label={`Sort by ${order} first`}
    >
      <span className={styles.text}>{label}</span>
      <DynamicIcon name="arrow-up-down" size={IconSize.MEDIUM} />
    </button>
  );
};
