import React from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./HomePage.module.scss";
import {
  PageHeader,
  PostsList,
  MobileFilters,
  DesktopFilters,
} from "./components";

const HomePage: React.FC = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <div>
      {isDesktop && <PageHeader />}
      <div className={styles.content}>
        {isMobile && <MobileFilters />}
        {isDesktop && <DesktopFilters />}
        <PostsList />
      </div>
    </div>
  );
};

export default HomePage;
