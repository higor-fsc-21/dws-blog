import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
