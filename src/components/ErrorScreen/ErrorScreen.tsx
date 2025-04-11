import { MainButton } from "../buttons";
import styles from "./ErrorScreen.module.scss";

interface ErrorScreenProps {
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ErrorScreen = ({
  message,
  onButtonClick,
  buttonText = "Return to Home",
}: ErrorScreenProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>!</div>
        <p className={styles.errorMessage}>{message}</p>

        {onButtonClick && (
          <MainButton
            variant="secondary"
            onClick={onButtonClick}
            className={styles.errorButton}
          >
            {buttonText}
          </MainButton>
        )}
      </div>
    </div>
  );
};

export default ErrorScreen;
