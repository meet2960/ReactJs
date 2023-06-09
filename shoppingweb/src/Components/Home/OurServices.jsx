import React from "react";
import { Col, Container, Row } from "reactstrap";

const OurServices = () => {
  return (
    <React.Fragment>
      <section className="my-5">
        <Container className="services">
          <Row className="row-cols-xl-4 row-cols-sm-2 row-cols-1 gy-4 gy-xl-0">
            <Col>
              <Row className="align-items-center">
                <Col xs={"auto"}>
                  <i className="bi bi-send-check-fill fs-35"></i>
                </Col>
                <Col>
                  <h6>Fast and Secure Delivery</h6>
                  <p className="mb-0 fs-14">Tell about your service.</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center">
                <Col xs={"auto"}>
                  <i className="bi bi-patch-check-fill fs-35"></i>
                </Col>
                <Col>
                  <h6>Money Back Guarantee</h6>
                  <p className="mb-0 fs-14">Within 10 days.</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center">
                <Col xs={"auto"}>
                  <i className="bi bi-arrow-left-square-fill fs-35"></i>
                </Col>
                <Col>
                  <h6>24 Hour Return Policyy</h6>
                  <p className="mb-0 fs-14">No question ask.</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center">
                <Col xs={"auto"}>
                  <i className="bi bi-question-octagon-fill fs-35"></i>
                </Col>
                <Col>
                  <h6>Pro Quality Support</h6>
                  <p className="mb-0 fs-14">24/7 Live support.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default OurServices;
