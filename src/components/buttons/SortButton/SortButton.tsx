import { useState } from "react";
import styles from "./SortButton.module.scss";
import { DynamicIcon } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";
type SortOrder = "newest" | "oldest";

interface SortButtonProps {
  initialOrder?: SortOrder;
  onOrderChange?: (order: SortOrder) => void;
}

export const SortButton = ({
  initialOrder = "newest",
  onOrderChange,
}: SortButtonProps) => {
  const [order, setOrder] = useState<SortOrder>(initialOrder);

  const handleClick = () => {
    const newOrder = order === "newest" ? "oldest" : "newest";
    setOrder(newOrder);
    onOrderChange?.(newOrder);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.sortButton}
      aria-label={`Sort by ${order} first`}
    >
      <span className={styles.text}>
        {order === "newest" ? "Newest first" : "Oldest first"}
      </span>

      <DynamicIcon name="arrow-up-down" size={IconSize.MEDIUM} />
    </button>
  );
};
