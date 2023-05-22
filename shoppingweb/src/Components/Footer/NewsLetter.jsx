import React from "react";
import { Col, Container, Row } from "reactstrap";

const NewsLetter = () => {
  return (
    <React.Fragment>
      <section>
        <div className="banner-bg my-3">
          <Container>
            <Row className="gy-3 gy-md-0">
              <Col md={6}>
                <div className="banner-bg-1 p-4 text-end rounded-2">
                  <h5>New Arrivals</h5>
                  <h3 className="py-3 border-bottom">Sports Outfit</h3>
                  <div>
                    From <span>$150</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="banner-bg-2 p-4 text-white rounded-2">
                  <h5 className="text-white">SmartWatches</h5>
                  <h3 className="py-3 border-bottom text-white">
                    Sale up to 20% Off
                  </h3>
                  <div>
                    Starting From <span>$200</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <Container className="newsletter my-4">
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
                    className="form-control form-control-sm"
                    placeholder="example@gmail.com"
                  />
                </Col>
                <Col>
                  <button type="button" className="btn btn-sm btn-dark">
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
