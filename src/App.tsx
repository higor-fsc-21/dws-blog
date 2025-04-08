import styles from "./App.module.scss";
import { Button } from "./components/Button/Button";
function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Blog</h1>
      <h2>Recent Posts</h2>

      <div className={styles.buttons}>
        <Button variant="primary">Apply filters</Button>

        <Button leftIcon="arrow-left" variant="secondary">
          Back
        </Button>
      </div>
    </div>
  );
}

export default App;
