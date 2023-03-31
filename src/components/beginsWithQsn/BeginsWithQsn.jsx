import React from "react";
import styles from "./beginsWithQsn.module.css";

const BeginsWithQsn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>It begins with question.</h2>
        <div className={styles.btn}>
          <span>Get Plus</span>
        </div>
      </div>
    </div>
  );
};

export default BeginsWithQsn;
