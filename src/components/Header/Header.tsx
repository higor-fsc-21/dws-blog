import logo from "../../assets/images/logo.png";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Header.module.scss";
import { SearchButton } from "../buttons";
import { SearchBar } from "../SearchBar";
import { useApp } from "../../contexts/AppContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchModal } from "../SearchModal";

const Header = () => {
  const { setSearch } = useApp();
  const navigate = useNavigate();
  const { isMobile, isDesktop } = useResponsive();

  const [localSearch, setLocalSearch] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearch = () => {
    setSearch(localSearch);
    navigate("/");
  };

  return (
    <>
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
          {isMobile && (
            <SearchButton onClick={() => setIsSearchModalOpen(true)} />
          )}
        </div>
      </header>

      <SearchModal
        onSubmit={handleSearch}
        onChange={setLocalSearch}
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
};

export default Header;
