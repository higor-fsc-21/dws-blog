export const mockPosts = Array.from({ length: 14 }, (_, index) => ({
  date: "Jan 20, 2024",
  title: `This is the title of the article with two lines ${index + 1}`,
  author: "Author Lastname",
  imageUrl:
    "https://media.istockphoto.com/id/1442179368/pt/foto/maldives-island.jpg?s=612x612&w=0&k=20&c=QL5EkiMwyL6Al8RXrwdKDJmFStF3zscKWAgks_B8-o0=",
  description:
    "Lorem ipsum dolor sit amet consectetur. Donec sed faucibus sit id viverra. Etiam donec feugiat amet velit.",
  categories: ["Category 1", "Category 2"],
}));
