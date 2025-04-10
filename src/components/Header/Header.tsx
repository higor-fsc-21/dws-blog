import logo from "../../assets/images/logo.png";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Header.module.scss";
import { SearchButton } from "../buttons";
import { SearchBar } from "../SearchBar";
import { useApp } from "../../contexts/AppContext";
import { useState } from "react";

const Header = () => {
  const { setSearch } = useApp();
  const { isMobile, isDesktop } = useResponsive();

  const [localSearch, setLocalSearch] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} alt="Dentsu World Services" src={logo} />
        {isDesktop && (
          <SearchBar
            value={localSearch}
            placeholder="Search"
            onChange={setLocalSearch}
            onSubmit={() => setSearch(localSearch)}
          />
        )}
        {isMobile && <SearchButton onClick={() => {}} />}
      </div>
    </header>
  );
};

export default Header;
