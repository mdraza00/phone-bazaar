import styles from "./styles.module.css";

export function SecondaryButton() {
  return (
    <button className={styles.btn + " " + styles['btn-secondary']}>
      Sign up 
    </button>
  );
}

