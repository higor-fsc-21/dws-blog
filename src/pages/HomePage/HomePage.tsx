import React from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./HomePage.module.scss";
import { PageHeader, PostsList, MobileFilters } from "./components";

const HomePage: React.FC = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <div className={styles.container}>
      {isDesktop && <PageHeader />}
      {isMobile && <MobileFilters />}
      <PostsList />
    </div>
  );
};

export default HomePage;
