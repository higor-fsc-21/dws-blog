import styles from "./Tag.module.scss";

interface TagProps {
  children: string;
}

export const Tag = ({ children }: TagProps) => {
  return <div className={styles.tag}>{children}</div>;
};
