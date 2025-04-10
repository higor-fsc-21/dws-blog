import React from "react";
import LastPostsList from "./components/LastPostsList";
import PostContent from "./components/PostContent";
import styles from "./PostDetailsPage.module.scss";
import { MainButton } from "../../components/buttons";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchPost } from "../../hooks/queries";

const PostDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();

  const { data: post, isLoading, isError } = useFetchPost(postId!);

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (isError || !post) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Error loading post</h2>
          <button onClick={() => navigate("/")}>Return to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <MainButton
        icon="arrow-left"
        variant="secondary"
        onClick={() => navigate("/")}
        className={styles.backButton}
      >
        Back
      </MainButton>

      <div className={styles.content}>
        <PostContent post={post} />
        <hr className={styles.divider} />
        <LastPostsList />
      </div>
    </div>
  );
};

export default PostDetailsPage;
