import React from "react";
import styles from "./useCases.module.css";

const UseCases = () => {
  return (
    <div className={`${styles.use_cases} container`}>
      <div className={styles.header}>
        <div className={styles.header_flex}>
          <img src="/img/pricingPlan.svg" alt="" />
          <span>Use cases</span>
        </div>
        <p>3 categories problem solution on AI PDF Chat</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h5>For Students</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <img src="/img/for-student.svg" alt="" />
        </div>
        <div className={styles.card1}>
          <div className={styles.card1_img}>
            <img src="/img/forWork.svg" alt="" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h5>For Work</h5>
        </div>
        <div className={styles.card}>
          <h5>For Curious Minds</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <img src="/img/for_curious.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
