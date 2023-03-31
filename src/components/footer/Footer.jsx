import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.left_side}`}>
        <img src="/img/Group.svg" alt="" />
        <h5>Logo here</h5>
      </div>
      <div className={styles.right_side}>
        <ul>
          <li>Features</li>
          <li>Explain the process</li>
          <li>Plans</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
