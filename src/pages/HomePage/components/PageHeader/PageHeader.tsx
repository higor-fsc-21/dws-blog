import React from "react";
import styles from "./PageHeader.module.scss";
import { SortButton } from "../../../../components/buttons";

const PageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DWS blog</h1>

      <SortButton />
    </div>
  );
};

export default PageHeader;
