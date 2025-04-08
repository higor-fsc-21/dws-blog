import styles from "./App.module.scss";
import { CategoryButton, MainButton } from "./components/buttons";
import { SortButton } from "./components/buttons/SortButton";
function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Blog</h1>
      <h2>Recent Posts</h2>

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
          onOrderChange={(order: unknown) =>
            console.log("order changed", order)
          }
        />
      </div>
    </div>
  );
}

export default App;
