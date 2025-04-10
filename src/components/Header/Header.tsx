import logo from "../../assets/images/logo.png";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Header.module.scss";
import { SearchButton } from "../buttons";
import { SearchBar } from "../SearchBar";
import { useApp } from "../../contexts/AppContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setSearch } = useApp();
  const navigate = useNavigate();
  const { isMobile, isDesktop } = useResponsive();

  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = () => {
    setSearch(localSearch);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} alt="Dentsu World Services" src={logo} />
        {isDesktop && (
          <SearchBar
            value={localSearch}
            placeholder="Search"
            onChange={setLocalSearch}
            onSubmit={handleSearch}
          />
        )}
        {isMobile && <SearchButton onClick={() => {}} />}
      </div>
    </header>
  );
};

export default Header;
