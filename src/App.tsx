import styles from "./App.module.scss";
import {
  CategoryButton,
  MainButton,
  SearchButton,
  SortButton,
} from "./components/buttons";

function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Blog</h1>

      <div className={styles.buttons}>
        <SearchButton onClick={() => console.log("search clicked")} />

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
