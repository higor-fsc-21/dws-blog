import { useNavigate } from "react-router-dom";
import { PostCard } from "../../../../components/PostCard/PostCard";
import { Category, Post } from "../../../../types/api";
import styles from "./PostsList.module.scss";

interface PostsListProps {
  isError: boolean;
  isLoading: boolean;
  posts: Post[] | undefined;
}

const PostsList = ({ posts, isLoading, isError }: PostsListProps) => {
  const navigate = useNavigate();

  if (isLoading) return <div className={styles.loading}>Loading posts...</div>;
  if (isError) return <div className={styles.error}>Error loading posts.</div>;
  if (!posts || posts.length === 0)
    return <div className={styles.empty}>No posts found.</div>;

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author.name}
          description={post.content}
          imageUrl={post.thumbnail_url}
          onPostClick={() => navigate(`/post/${post.id}`)}
          date={new Date(post.createdAt).toLocaleDateString()}
          categories={post.categories.map((cat: Category) => cat.name)}
        />
      ))}
    </div>
  );
};

export default PostsList;
