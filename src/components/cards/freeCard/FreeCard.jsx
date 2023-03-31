import React from "react";
import styles from "./freeCard.module.css";

const FreeCard = () => {
  return (
    <div className={styles.freeCard}>
      <div className={styles.card_header}>
        <div>
          <span>FREE</span>
        </div>
        <b>current</b>
      </div>
      <div className={styles.amount}>
        <span className={styles.amount_span}>
          <span>$0/</span>
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
              <span>120 pages/PDF</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>10 MB/PDF</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>3 PDFs/day</span>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ marginBottom: "20px" }}
            >
              <img src="/img/rightTik.svg" alt="" />
              <span>50 questions/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCard;
