import React from "react";
import { Col, Container, Row } from "reactstrap";
import customQrCode from "../../assets/images/qr-code.png";
import playStoreImg from "../../assets/images/play-store.png";
import appStoreImg from "../../assets/images/app-store.png";
import paypalLogo from "../../assets/images/PaypalLogo.png";
import visaLogo from "../../assets/images/VisaLogo.png";
import masterLogo from "../../assets/images/MasterCardLogo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="mb-3">
        <Container className="footer-details fs-16">
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
      </section>
      <footer className="mt-3">
        <Container fluid className="footer">
          <Container className="py-4 fs-16">
            <Row className="gy-3 gy-xl-0">
              <Col xs={12} xl={4}>
                <Row className="justify-content-center justify-content-xl-start">
                  <Col xs={"auto"}>
                    <i className="bi bi-facebook"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i className="bi bi-twitter"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i className="bi bi-instagram"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i className="bi bi-discord"></i>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} xl={4}>
                <div className="d-flex justify-content-center">
                  Ecommerce© {new Date().getFullYear()} All Rights Reserved by
                  Meet
                </div>
              </Col>
              <Col xs={12} xl={4}>
                <div className="d-flex justify-content-center justify-content-xl-end">
                  <div className="me-3">We Accept</div>
                  <Row>
                    <Col xs={"auto"}>
                      <div>
                        <img
                          src={paypalLogo}
                          alt="payment-methods"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col xs={"auto"}>
                      <div>
                        <img
                          src={visaLogo}
                          alt="payment-methods"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col xs={"auto"}>
                      <div>
                        <img
                          src={masterLogo}
                          alt="payment-methods"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
