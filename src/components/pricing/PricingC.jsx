import React from "react";
import styles from "./pricing.module.css";
import FreeCard from "../cards/freeCard/FreeCard";
import PremiumCard from "../cards/premiumCard/PremiumCard";

const PricingC = () => {
  return (
    <div className={`${styles.pricing}`}>
      <div className="d-flex justify-content-end">
        <img className={styles.cancelImg} src="/img/cancel.svg" alt="" />
      </div>
      <div className={styles.headline}>
        <img src="/img/pricingPlan.svg" alt="" />
        <h1>Pricing Plan</h1>
      </div>
      <div className={styles.cards}>
        <FreeCard />
        <PremiumCard />
      </div>
    </div>
  );
};

export default PricingC;
