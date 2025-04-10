import logo from "../../assets/images/logo.png";
import useResponsive from "../../hooks/useResponsive";
import { SearchButton } from "../buttons";
import { SearchBar } from "../SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} alt="Dentsu World Services" src={logo} />
        {isDesktop && <SearchBar onSearch={() => {}} placeholder="Search" />}
        {isMobile && <SearchButton onClick={() => {}} />}
      </div>
    </header>
  );
};

export default Header;
