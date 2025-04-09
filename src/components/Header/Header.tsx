import React from "react";
import { SearchBar } from "../SearchBar";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} alt="Dentsu World Services" src={logo} />
        <SearchBar placeholder="Search" onSearch={() => {}} />
      </div>
    </header>
  );
};

export default Header;
