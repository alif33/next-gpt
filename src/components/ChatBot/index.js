import React from "react";
import styles from "./ChatBot.module.css";

const ChatBot = () => {
  return (
    <div className={styles.chatBot}>
      <div className={styles.chatCard}>
        <div className={`${styles.chatHeader}`}>
          <div className={styles.hLeft}>
            <img src="/img/pdfGroup.svg" alt="" />
            <div>
              <h5 style={{ paddingTop: "10px" }}>Maths Qustion.pdf</h5>
              <span>12mb</span>
            </div>
          </div>
          <div className={styles.hRight}>
            <span>Reset</span>
            <span>Close</span>
          </div>
        </div>
        <div className={styles.aiChat}>
          <p>
            Hello there! I am a helpful PDF file here to assist you with a math
            problem. Specifically, I can help you find the number that is
            equivalent to 3 to the power of 4 divided by 3 to the power of 2.
            This problem was taken from a standardized test given in New York in
            2014.
          </p>
        </div>
        <div className={styles.manChat}>
          <p>
            What other types of math problems can I expect to see on the New
            York standardized test?
          </p>
        </div>
        <img className={styles.img} src="/img/aiIcon.svg" alt="" />
        <div className={styles.cardFooter}>
          <div className={styles.footerItm}>
            <span>Ask any question...</span>
            <div className={styles.footerImg}>
              <img src="/img/send.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
