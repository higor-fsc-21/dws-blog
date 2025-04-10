import React from "react";
import { PostCard } from "../../../../components/PostCard/PostCard";
import { mockPosts } from "./mockData";
import styles from "./PostsList.module.scss";

const PostsList: React.FC = () => {
  return (
    <div className={styles.container}>
      {mockPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
