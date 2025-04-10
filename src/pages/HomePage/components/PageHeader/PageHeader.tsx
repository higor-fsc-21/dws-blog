import { useCallback } from "react";
import { SortButton } from "../../../../components/buttons";
import { AppliedFilters } from "../../../../types/app";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  onApplyFilters: (filters: Partial<AppliedFilters>) => void;
}

const PageHeader = ({ onApplyFilters }: PageHeaderProps) => {
  const handleSortChange = useCallback(
    (order: "newest" | "oldest") => onApplyFilters({ order }),
    [onApplyFilters]
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DWS blog</h1>

      <SortButton initialOrder="newest" onOrderChange={handleSortChange} />
    </div>
  );
};

export default PageHeader;
