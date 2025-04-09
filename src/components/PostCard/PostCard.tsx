import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tag } from "../Tag/Tag"; // Assuming Tag component path
import styles from "./PostCard.module.scss";

const MAX_TITLE_HEIGHT = 30;
const INITIAL_DESCRIPTION_CLASS = `${styles.description} ${styles.truncate1}`;
interface PostCardProps {
  date: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  categories: string[];
}

export const PostCard: React.FC<PostCardProps> = ({
  date,
  title,
  author,
  imageUrl,
  categories,
  description,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [descriptionClass, setDescriptionClass] = useState(
    INITIAL_DESCRIPTION_CLASS
  );

  const categoriesList = useMemo(
    () => categories.map((category) => <Tag key={category}>{category}</Tag>),
    [categories]
  );

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.offsetHeight;

      const truncateClass = titleHeight
        ? titleHeight > MAX_TITLE_HEIGHT
          ? styles.truncate2
          : styles.truncate3
        : "";

      setDescriptionClass(`${styles.description} ${truncateClass}`);
    }
  }, [title]);

  return (
    <div className={styles.card}>
      <img alt={title} src={imageUrl} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{date}</span>
          <div className={styles.dot} />
          <span>{author}</span>
        </div>
        <div className={styles.body}>
          <h3 className={styles.title} ref={titleRef}>
            {title}
          </h3>
          <p className={descriptionClass}>{description}</p>
        </div>
        <div className={styles.tags}>{categoriesList}</div>
      </div>
    </div>
  );
};
