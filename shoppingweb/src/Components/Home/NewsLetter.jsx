import React from "react";
import { Col, Container, Row } from "reactstrap";

const NewsLetter = () => {
  return (
    <React.Fragment>
      <section className="mb-5">
        <Container className="newsletter">
          <div className="newsletter-bg p-4 p-md-5 rounded-3">
            <div className="content p-3">
              <div className="fs-14 mb-1 newsletter-icon">
                <i className="bi bi-envelope-open-fill me-2"></i>
                <span>NewsLetter</span>
              </div>
              <h4 className="fw-bold mb-4 newsletter-title">
                Get Weekly Updated about Products
              </h4>
              <Row className="align-items-center">
                <Col xs={7} lg={3}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="xyz@abc.com"
                  />
                </Col>
                <Col xs={5}>
                  <button type="button" className="btn btn-dark">
                    Subscribe
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default NewsLetter;
