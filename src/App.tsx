import { useState } from "react";
import styles from "./App.module.scss";
import { CategoryButton, MainButton, SortButton } from "./components/buttons";
import { SearchBar } from "./components/SearchBar";
import { Tag } from "./components/Tag";
import { Dropdown, DropdownOptionType } from "./components/Dropdown";
import { PostCard } from "./components/PostCard/PostCard";

const categories: DropdownOptionType[] = [
  { id: 1, label: "Category 1" },
  { id: 2, label: "Category 2" },
  { id: 3, label: "Category 3" },
  { id: 4, label: "Category 4" },
  { id: 5, label: "Category 5" },
  { id: 6, label: "Category 6" },
  { id: 7, label: "Category 7" },
  { id: 8, label: "Category 8" },
  { id: 9, label: "Category 9" },
  { id: 10, label: "Category 10" },
];

function App() {
  const [selectedCategories, setSelectedCategories] = useState<
    DropdownOptionType[]
  >([]);

  const samplePost = {
    imageUrl:
      "https://thumbs.dreamstime.com/b/palmas-e-praia-tropical-com-areia-branca-136606345.jpg",
    date: "Jan 20, 2024",
    author: "Author Lastname",
    title: "This is the title of the article with two lines",
    description:
      "Lorem ipsum dolor sit amet consectetur. Donec sed faucibus sit id viverransectetur. Donec sed faucibus sit id viverra. Etiam dLorem ipsum dolor sit amet consectetur. Donec sed faucibus sit id viverra. Etiam d",
    categories: ["Category 1", "Category 2"],
  };
  const samplePost2 = {
    imageUrl:
      "https://thumbs.dreamstime.com/b/palmas-e-praia-tropical-com-areia-branca-136606345.jpg",
    date: "Jan 20, 2024",
    author: "Author Lastname",
    title: "This is the title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Donec sed faucibus sit id viverransectetur. Donec sed faucibus sit id viverra. Etiam dLorem ipsum dolor sit amet consectetur. Donec sed faucibus sit id viverra. Etiam d",
    categories: ["Category 1", "Category 2"],
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Your Blog</h1>

      <div className={styles.searchWrapper}>
        <SearchBar
          placeholder="Search"
          onSearch={() => console.log("search clicked")}
        />
      </div>

      <div className={styles.filters}>
        <Dropdown
          options={categories}
          selectedOptions={selectedCategories}
          onChange={setSelectedCategories}
        />
      </div>

      <div className={styles.tags}>
        {selectedCategories.map((category) => (
          <Tag key={category.id}>{category.label}</Tag>
        ))}
      </div>

      <div className={styles.buttons}>
        <MainButton variant="primary">Apply filters</MainButton>

        <MainButton icon="arrow-left" variant="secondary">
          Back
        </MainButton>

        <CategoryButton
          isOpen
          onClick={() => console.log("clicked")}
          selectedCategories={["Category 1", "Category 2"]}
        />

        <SortButton
          initialOrder="newest"
          onOrderChange={(order) => console.log("order changed", order)}
        />
      </div>

      <PostCard
        imageUrl={samplePost.imageUrl}
        date={samplePost.date}
        author={samplePost.author}
        title={samplePost.title}
        description={samplePost.description}
        categories={samplePost.categories}
      />

      <PostCard
        imageUrl={samplePost2.imageUrl}
        date={samplePost2.date}
        author={samplePost2.author}
        title={samplePost2.title}
        description={samplePost2.description}
        categories={samplePost2.categories}
      />
    </div>
  );
}

export default App;
