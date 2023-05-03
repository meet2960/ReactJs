import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid={true}>
      <div className="d-flex justify-content-center">
        <p>All Rights Reserver by Meet @{currentYear}</p>
      </div>
    </Container>
  );
};

export default Footer;
