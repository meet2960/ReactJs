import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid={true} className="px-0">
      <div className="d-flex justify-content-center align-items-center nav-bg text-white p-3">
        <p className="mb-0">All Rights Reserver by @Meet, {currentYear}</p>
      </div>
    </Container>
  );
};

export default Footer;
