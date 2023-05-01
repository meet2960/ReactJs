import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="d-flex justify-content-center">
      <div>Movies Zone </div>
      <div> {currentYear}, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
