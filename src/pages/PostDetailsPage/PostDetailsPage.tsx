import { useNavigate, useParams } from "react-router-dom";
import { MainButton } from "../../components/buttons";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";
import LoadingScreen from "../../components/LoadingScreen";
import { useFetchPost } from "../../hooks/queries";
import LastPostsList from "./components/LastPostsList";
import PostContent from "./components/PostContent";
import styles from "./PostDetailsPage.module.scss";

export const PostDetailsPage = () => {
  const navigate = useNavigate();
  const { id: postId } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useFetchPost(postId!);
  const { post, lastPosts } = data || {};

  const navigateToHome = () => navigate("/");

  const handleError = (message: string) => (
    <ErrorScreen message={message} onButtonClick={navigateToHome} />
  );

  if (isLoading) return <LoadingScreen />;
  if (isError) return handleError("Error loading post details.");
  if (!post) return handleError("Post not found.");

  return (
    <div className={styles.container}>
      <MainButton
        icon="arrow-left"
        variant="secondary"
        onClick={navigateToHome}
        className={styles.backButton}
      >
        Back
      </MainButton>

      <div className={styles.content}>
        <PostContent post={post} />
        <hr className={styles.divider} />
        <LastPostsList posts={lastPosts || []} />
      </div>
    </div>
  );
};

export default PostDetailsPage;
