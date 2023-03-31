import React from "react";
import AccountChat from "../accountChat/AccountChat";
import Work from "../work/Work";
import Footer from "../footer/Footer";

const PdfUploader = ({ setPdf }) => {
  return (
    <>
      <AccountChat setPdf={setPdf} />
      <Work />
      <Footer />
    </>
  );
};

export default PdfUploader;
