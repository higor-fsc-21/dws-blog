import { useLocation, useNavigate } from "react-router-dom";
import { PostCard } from "../../../../components/PostCard/PostCard";
import styles from "./LastPostsList.module.scss";
import { Post } from "../../../../types/api";
import { useCallback } from "react";
import { useLastUserPosts } from "../../../../hooks/useLastUserPosts";

const LastPostsList = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const typedState = state as { lastPosts: Post[] };
  const posts = typedState?.lastPosts || [];

  const { getLastUserPosts } = useLastUserPosts(posts);

  const handlePostClick = useCallback(
    (post: Post) => {
      const lastPosts = getLastUserPosts(post.author, post.id);
      navigate(`/post/${post.id}`, { state: { post, lastPosts } });
    },
    [navigate, getLastUserPosts]
  );

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
            onPostClick={() => handlePostClick(post)}
            date={new Date(post.createdAt).toLocaleDateString()}
            categories={post.categories.map((cat) => cat.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default LastPostsList;
