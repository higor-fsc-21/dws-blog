import React from "react";
import { Dropdown } from "../../../../components/Dropdown";
import { SortButton } from "../../../../components/buttons";
import styles from "./MobileFilters.module.scss";

const MobileFilters: React.FC = () => {
  const categoryOptions = [
    { id: 1, label: "Category 1", value: "category1" },
    { id: 2, label: "Category 2", value: "category2" },
  ];

  const authorOptions = [
    { id: 1, label: "Author 1", value: "author1" },
    { id: 2, label: "Author 2", value: "author2" },
  ];

  return (
    <div className={styles.mobileFilters}>
      <Dropdown options={categoryOptions} />
      <Dropdown options={authorOptions} />
      <SortButton initialOrder="newest" />
    </div>
  );
};

export default MobileFilters;
