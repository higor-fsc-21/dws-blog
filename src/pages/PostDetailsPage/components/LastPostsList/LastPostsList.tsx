import { useNavigate } from "react-router-dom";
import { PostCard } from "../../../../components/PostCard/PostCard";
import { Post } from "../../../../types/api";
import styles from "./LastPostsList.module.scss";

interface LastPostsListProps {
  posts: Post[];
}

const LastPostsList = ({ posts }: LastPostsListProps) => {
  const navigate = useNavigate();

  if (!posts?.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last articles</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author.name}
            description={post.content}
            imageUrl={post.thumbnail_url}
            onPostClick={() => navigate(`/post/${post.id}`)}
            categories={post.categories.map((cat) => cat.name)}
            date={new Date(post.createdAt).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default LastPostsList;
