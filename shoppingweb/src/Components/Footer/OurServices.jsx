import React from "react";
import { Col, Container, Row } from "reactstrap";

const OurServices = () => {
  return (
    <React.Fragment>
      <section>
        <Container className="services py-4">
          <Row className="row-cols-xl-4 row-cols-sm-2 row-cols-1 gy-3 gy-xl-0">
            <Col>
              <div className="d-flex align-items-center">
                <div className="bg-dark p-2 rounded-3 me-3 text-white">
                  <i className="bi bi-send-check-fill fs-16"></i>
                </div>
                <div className="content">
                  <h6>Fast and Secure Delivery</h6>
                  <p className="mb-0 fs-14">Tell about your service.</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center">
                <div className="bg-dark p-2 rounded-3 me-3 text-white">
                  <i className="bi bi-patch-check-fill fs-16"></i>
                </div>
                <div className="content">
                  <h6>Money Back Guarantee</h6>
                  <p className="mb-0 fs-14">Within 10 days.</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center">
                <div className="bg-dark p-2 rounded-3 me-3 text-white">
                  <i className="bi bi-arrow-return-left fs-16"></i>
                </div>
                <div className="content">
                  <h6>24 Hour Return Policyy</h6>
                  <p className="mb-0 fs-14">No question ask.</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center">
                <div className="bg-dark p-2 rounded-3 me-3 text-white">
                  <i className="bi bi-question-octagon-fill fs-16"></i>
                </div>
                <div className="content">
                  <h6>Pro Quality Support</h6>
                  <p className="mb-0 fs-14">24/7 Live support.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default OurServices;