import React from "react";
import { PostCard } from "../../../../components/PostCard/PostCard";
import styles from "./LastPostsList.module.scss";
import { mockPosts } from "../../mocks";

const LastPostsList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last articles</h2>
      <div className={styles.posts}>
        {mockPosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default LastPostsList;
