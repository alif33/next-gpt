import React from "react";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <div className={`${styles.work} container`}>
      <div className={styles.work_header}>
        <div className={styles.header_flex}>
          <img src="/img/pricingPlan.svg" alt="" />
          <span>How It work</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
      </div>
      <div className={styles.work_container}>
        <div className={styles.card}>
          <img src="/img/card1.svg" alt="" />
          <h5>Get A Questions</h5>
        </div>
        <div className={styles.card}>
          <img src="/img/card2.svg" alt="" />
          <h5>Upload Your Question as PDF File</h5>
        </div>
        <div className={styles.card}>
          <img src="/img/card3.svg" alt="" />
          <h5>Get Answer By Our AI</h5>
        </div>
      </div>
    </div>
  );
};

export default Work;
