import React, { useCallback } from "react";
import { PostCard } from "../../../../components/PostCard/PostCard";
import styles from "./PostsList.module.scss";
import { Category, Post } from "../../../../types/api";
import { useNavigate } from "react-router-dom";
import { useLastUserPosts } from "../../../../hooks/useLastUserPosts";

interface PostsListProps {
  isError: boolean;
  isLoading: boolean;
  posts: Post[] | undefined;
}

const PostsList: React.FC<PostsListProps> = ({ posts, isLoading, isError }) => {
  const navigate = useNavigate();
  const { getLastUserPosts } = useLastUserPosts(posts);

  const handlePostClick = useCallback(
    (post: Post) => {
      const lastPosts = getLastUserPosts(post.author, post.id);
      navigate(`/post/${post.id}`, { state: { post, lastPosts } });
    },
    [navigate, getLastUserPosts]
  );

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
          onPostClick={() => handlePostClick(post)}
          date={new Date(post.createdAt).toLocaleDateString()}
          categories={post.categories.map((cat: Category) => cat.name)}
        />
      ))}
    </div>
  );
};

export default PostsList;
