import styles from "./Shimmer.module.scss";

function Shimmer() {
  return (
    <div className={styles["shimmer-wrapper"]}>
      <div className={styles.shimmer}></div>
    </div>
  );
}

export default Shimmer;
