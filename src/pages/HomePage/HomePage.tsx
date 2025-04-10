import React from "react";
import styles from "./HomePage.module.scss";
import { PostsList } from "./components";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PostsList />
    </div>
  );
};

export default HomePage;
