import React from "react";
import styles from "./PostContent.module.scss";
import { Post } from "../../../../types/api";

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.authorInfo}>
        <img
          alt={post.author.name}
          className={styles.authorImage}
          src={post.author.profilePicture}
        />
        <div>
          <p className={styles.authorName}>
            <span>Written by:</span> {post.author.name}
          </p>
          <p className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <img
        className={styles.mainImage}
        src={post.thumbnail_url}
        alt={post.title}
      />
      <div className={styles.text}>
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default PostContent;
