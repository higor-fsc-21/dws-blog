import React, { useState } from "react";
import { MainButton } from "../../../../components/buttons/MainButton";
import styles from "./DesktopFilters.module.scss";
import { SlidersHorizontal } from "lucide-react";

const FILTER_ICON_SIZE = 20;

const categoryOptions = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

const authorOptions = [
  "Author Lastname",
  "Author Lastname",
  "Author Lastname",
  "Author Lastname",
  "Author Lastname",
];

const DesktopFilters: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleAuthorClick = (author: string) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter((auth) => auth !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const handleApplyFilters = () => {
    // Implement filter application logic here
    console.log("Applied filters:", { selectedCategories, selectedAuthors });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        <SlidersHorizontal size={FILTER_ICON_SIZE} />
        <span>Filters</span>
      </h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Category</h3>
        <ul className={styles.optionsList}>
          {categoryOptions.map((category, index) => (
            <li
              key={index}
              className={`${styles.optionItem} ${
                selectedCategories.includes(category) ? styles.selected : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Author</h3>
        <ul className={styles.optionsList}>
          {authorOptions.map((author, index) => (
            <li
              key={index}
              className={`${styles.optionItem} ${
                selectedAuthors.includes(author) ? styles.selected : ""
              }`}
              onClick={() => handleAuthorClick(author)}
            >
              {author}
            </li>
          ))}
        </ul>
      </div>

      <MainButton fullWidth variant="primary" onClick={handleApplyFilters}>
        Apply filters
      </MainButton>
    </div>
  );
};

export default DesktopFilters;
