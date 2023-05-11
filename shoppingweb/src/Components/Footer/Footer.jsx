import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container>
      <div className="footer py-4">
        <Row>
          <Col sm={6}>Ecommerce© {new Date().getFullYear()}</Col>
          <Col sm={6}>
            <div className="text-sm-end d-none d-sm-block">
              Design & Develop by Meet Ghelani
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;