import React from "react";
import customQrCode from "../../assets/images/qr-code.png";
import playStoreImg from "../../assets/images/play-store.png";
import appStoreImg from "../../assets/images/app-store.png";
import { Col, Container, Row } from "reactstrap";

const FooterDetails = () => {
  return (
    <React.Fragment>
      <section className="my-4">
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
                      <i className="bi bi-telephone-fill me-2"></i>
                      +919185785742
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
                    <Col xs={3} md={4} lg={5} xl={4}>
                      <img
                        src={customQrCode}
                        alt="qr-code"
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={4} md={5} lg={7}>
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
                  <div></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FooterDetails;
