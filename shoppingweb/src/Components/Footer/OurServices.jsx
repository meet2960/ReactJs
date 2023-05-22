import React from "react";
import { Col, Container, Row } from "reactstrap";
import customQrCode from "../../assets/images/qr-code.png";
import playStoreImg from "../../assets/images/play-store.png";
import appStoreImg from "../../assets/images/app-store.png";

const OurServices = () => {
  return (
    <React.Fragment>
      <section>
        <Container className="footer-details fs-16 my-3">
          <Row>
            <Col xs={12} md={6} lg={3}>
              <div className="content">
                <h5 className="mb-3 fw-semibold">Support</h5>
                <p>Swagat Park, Nikol Gam Road, Ahmedabad, Gujarat - 382350</p>
                <ul className="list-unstyled">
                  <li>
                    <span>
                      <i className="bi bi-envelope-fill me-2"></i>
                      example@domain.com
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-telephone-fill me-2"></i>+919185785742
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="content">
                <h5 className="mb-3 fw-semibold">Account</h5>
                <ul className="list-unstyled">
                  <li>
                    <span>My Account</span>
                  </li>
                  <li>
                    <span>Login/Register</span>
                  </li>
                  <li>
                    <span>Cart</span>
                  </li>
                  <li>
                    <span>Wishlist</span>
                  </li>
                  <li>
                    <span>Shop</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="content">
                <h5 className="mb-3 fw-semibold">Quick Link</h5>
                <ul className="list-unstyled">
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span>Term Of Use</span>
                  </li>
                  <li>
                    <span>FAQ</span>
                  </li>

                  <li>
                    <span>Contact</span>
                  </li>
                  <li>
                    <span>Support</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="content">
                <h5 className="mb-3 fw-semibold">Download App</h5>
                <div>
                  <span>Save $3 With App & New User only</span>
                  <Row className="align-items-center mt-3">
                    <Col xs={4} lg={5} xl={4}>
                      <img
                        src={customQrCode}
                        alt="qr-code"
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={8} lg={7} xl={8}>
                      <div className="mb-2">
                        <img
                          src={playStoreImg}
                          alt="playStore"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <img
                          src={appStoreImg}
                          alt="appStore"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
