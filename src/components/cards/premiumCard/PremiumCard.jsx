import React from "react";
import styles from "./premiumCard.module.css";

const PremiumCard = () => {
  return (
    <div className={styles.premiumCard}>
      <div className={styles.card_header}>
        <span style={{ color: "white" }}>PLUS</span>
      </div>
      <div className={styles.amount}>
        <span className={styles.amount_span}>
          <span>$5/</span>
          <span style={{ color: "#4D575E" }}>mo</span>
        </span>
      </div>
      <div className={`d-flex justify-content-center align-items-center`}>
        <div className={styles.plans}>
          <div style={{ marginTop: "36px", marginLeft: "35px" }}>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>2,000 pages/PDF</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>32 MB/PDF</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>50 PDFs/day</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>1000 questions/day</span>
            </div>
            <div className={styles.btn}>
              <span>Get Plus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
