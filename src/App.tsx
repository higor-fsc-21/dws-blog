import styles from "./App.module.scss";
import { CategoryButton, MainButton, SortButton } from "./components/buttons";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Blog</h1>

      <div className={styles.searchWrapper}>
        <SearchBar
          placeholder="Search"
          onSearch={() => console.log("search clicked")}
        />
      </div>

      <div className={styles.buttons}>
        <MainButton variant="primary">Apply filters</MainButton>

        <MainButton icon="arrow-left" variant="secondary">
          Back
        </MainButton>

        <CategoryButton
          isOpen
          onClick={() => console.log("clicked")}
          selectedCategories={["Category 1", "Category 2"]}
        />

        <SortButton
          initialOrder="newest"
          onOrderChange={(order) => console.log("order changed", order)}
        />
      </div>
    </div>
  );
}

export default App;
