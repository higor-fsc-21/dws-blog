import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";
import { PostCard } from "../../../../components/PostCard/PostCard";
import LoadingScreen from "../../../../components/LoadingScreen";
import { Category, Post } from "../../../../types/api";
import styles from "./PostsList.module.scss";
import ErrorScreen from "../../../../components/ErrorScreen/ErrorScreen";

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  style: CSSProperties;
}

interface PostsListProps {
  isError: boolean;
  isLoading: boolean;
  posts: Post[] | undefined;
}

const GAP = 16;
const CARD_HEIGHT = 425;
const MIN_CARD_WIDTH = 300;
const MAX_CARD_WIDTH = 400;

const PostsList = ({ posts, isLoading, isError }: PostsListProps) => {
  const navigate = useNavigate();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen message="Error loading posts." />;
  if (!posts || !posts.length) return <ErrorScreen message="No posts found." />;

  return (
    <div className={styles.container}>
      <AutoSizer>
        {({ height, width }) => {
          const maxColumns = Math.floor((width + GAP) / (MIN_CARD_WIDTH + GAP));
          const minColumns = Math.ceil((width + GAP) / (MAX_CARD_WIDTH + GAP));
          const columnCount = Math.max(1, Math.min(maxColumns, minColumns));
          const cardWidth = (width - (columnCount - 1) * GAP) / columnCount;
          const rowCount = Math.ceil(posts.length / columnCount);

          const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
            const postIndex = rowIndex * columnCount + columnIndex;
            const post = posts[postIndex];

            if (!post) return null;

            return (
              <div style={{ ...style, padding: GAP / 2 }}>
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
              </div>
            );
          };

          return (
            <Grid
              width={width}
              height={height}
              rowCount={rowCount}
              className={styles.grid}
              columnCount={columnCount}
              columnWidth={cardWidth + GAP}
              rowHeight={CARD_HEIGHT + GAP}
            >
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default PostsList;
