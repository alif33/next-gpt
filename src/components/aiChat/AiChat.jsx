import React from "react";
import styles from "./AiChat.module.css";
import Link from "next/link";


const AiChat = () => {
  return (
    <div className={`${styles.ai_chat}`}>
      <div className={`${styles.left_side}`}>
        <h6>Next Generation</h6>
        <h4 className="d-flex align-items-center gap-2">
          AI <img src="/img/pdfGroup.svg" />
          Chat
        </h4>
        <div className={styles.line}></div>
        <p>
          Meet our AI, with <b>New Student support technology,</b> Our AI can
          help Quickly and very accurate way and also will suggest questions
        </p>
        <span><Link href="/chat">Try it now</Link></span>
      </div>
      {/* <div className={`${styles.right_side}`}>gellow</div> */}
    </div>
  );
};

export default AiChat;
