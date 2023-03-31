import React from "react";
import styles from "./ChatBot.module.css";


const ChatBot = () => {

  return (
    <div className={styles.chatBot}>
        <div className={`${styles.chatHeader} d-flex`}>
            <div className="left">
                <h5>Maths Qustion.pdf</h5>
            </div>
            <div className="right">
                <span>Reset</span>
                <span>Close</span>
            </div>
        </div>
        <div className="chatBody">
            <p>Hello there! I am a helpful PDF</p>
            <p>What other types of math problems can I expect to see on the New York standardized test?</p>
        </div>
        <div className="chatFooter">
            <input />
        </div>
    </div>
  );
};

export default ChatBot;