import React, { useState } from "react";
import styles from "./accountChat.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const AccountChat = ({ setPdf }) => {
  const [pdfUri, setPdfUri] = useState();
  const router = useRouter();

  const handlePdf = async () => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        router.push(`/result/${data}`);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = () => {
    setPdf(true);
  };

  return (
    <div className={styles.account_chat}>
      <div className={styles.header}>
        <img src="/img/pricingPlan.svg" alt="" />
        <span>Chat With Any PDF</span>
      </div>
      <div className={styles.channel}>
        <div className={styles.item1}>
          <img src="/img/discord.svg" alt="" />
          <span>Join Discord</span>
        </div>
        <div className={styles.item2}>
          <img src="/img/twitter.svg" alt="" />
          <span>Post to Twitter</span>
        </div>
        <div className={styles.item1}>
          <img src="/img/fb.svg" alt="" />
          <span>Share on Facebook</span>
        </div>
      </div>
      <div className={`row ${styles.cards}`}>
        <div className="col-md-6">
          <div className={`float-end ${styles.left_card} mr-2`}>
            <h5>Paste URL</h5>
            <div className="" style={{ marginLeft: "25px", marginTop: "12px" }}>
              <input type="text" placeholder="Paste URL" />
            </div>
            <div className={`${styles.btn}`} onClick={handleUpload}>
              <p>Upload</p>
            </div>
            <h5 className="pointer" onClick={handlePdf}>
              Find PDF
            </h5>
            <div className="" style={{ marginLeft: "25px", marginTop: "12px" }}>
              <input type="text" placeholder="Paste URL" />
            </div>
            <div className={`${styles.btn}`}>
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.right_card}>
            <div className={styles.card_border} style={{ margin: "25px 25px" }}>
              <div className={styles.content}>
                <img src="/img/pdf.svg" alt="" />
                <span>Drag & Drop Your Question as PDF File</span>
                <p>
                  Or <Link href="">Browse Files</Link> on your computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountChat;
