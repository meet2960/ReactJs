import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container className=" py-3">
        <Row>
          <Col sm={6}>Ecommerce© {new Date().getFullYear()}</Col>
          <Col sm={6}>
            <div className="text-sm-end d-none d-sm-block">
              Design & Develop by Meet Ghelani
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
