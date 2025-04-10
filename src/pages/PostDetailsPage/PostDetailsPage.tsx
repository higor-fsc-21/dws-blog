import React from "react";
import LastPostsList from "./components/LastPostsList";
import PostContent from "./components/PostContent";
import styles from "./PostDetailsPage.module.scss";
import { MainButton } from "../../components/buttons";

const PostDetailsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <MainButton
        icon="arrow-left"
        variant="secondary"
        className={styles.backButton}
      >
        Back
      </MainButton>

      <div className={styles.content}>
        <PostContent />
        <hr className={styles.divider} />
        <LastPostsList />
      </div>
    </div>
  );
};

export default PostDetailsPage;
