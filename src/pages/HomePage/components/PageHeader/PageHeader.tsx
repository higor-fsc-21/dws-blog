import { useCallback } from "react";
import { SortButton } from "../../../../components/buttons";
import { AppliedFilters } from "../../../../types/app";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  order?: "newest" | "oldest";
  onApplyFilters: (filters: Partial<AppliedFilters>) => void;
}

const PageHeader = ({ order = "newest", onApplyFilters }: PageHeaderProps) => {
  const handleSortChange = useCallback(
    (newOrder: "newest" | "oldest") => onApplyFilters({ order: newOrder }),
    [onApplyFilters],
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DWS blog</h1>

      <SortButton order={order} onOrderChange={handleSortChange} />
    </div>
  );
};

export default PageHeader;
