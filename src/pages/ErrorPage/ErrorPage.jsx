import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <h1 className={styles.errorTitle}>Something went wrong!</h1>
        <div className={styles.errorContent}>
          <p>
            We are unable to process your request at this time. Please try again
            later.
          </p>
          <p>If the problem persists, contact support.</p>
          <p>Thank you for your understanding.</p>
        </div>
        <button
          className={styles.backButton}
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
