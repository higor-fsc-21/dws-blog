import React from "react";
import styles from "./PostContent.module.scss";
import { mockPost } from "../../mocks";

const PostContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{mockPost.title}</h1>
      <div className={styles.authorInfo}>
        <img
          alt="Author"
          className={styles.authorImage}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKC0e4V59rDNR5lA5x7-PTmBnDUzlfEwXkiw&s"
        />
        <div>
          <p className={styles.authorName}>
            <span>Written by:</span> {mockPost.author}
          </p>
          <p className={styles.date}>{mockPost.date}</p>
        </div>
      </div>
      <img className={styles.mainImage} src={mockPost.imageUrl} alt="Main" />
      <div className={styles.text}>
        {mockPost.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default PostContent;
