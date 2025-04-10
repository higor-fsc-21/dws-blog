export interface Author {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  profilePicture: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  author: Author;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  thumbnail_url: string;
  categories: Category[];
}
