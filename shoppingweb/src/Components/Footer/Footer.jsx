import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      {/* <Container className="newsletter my-5">
        <div className="newsletter-bg p-4 p-md-5 rounded-3">
          <div className="content p-3">
            <div className="fs-14 mb-1">
              <i class="bi bi-envelope-open-fill me-2"></i>
              <span>NewsLetter</span>
            </div>
            <h4 className="fw-bold mb-4">Get Weekly Updated about Products</h4>
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
      <Container className="footer-details fs-16 py-3">
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
                    <i class="bi bi-telephone-fill me-2"></i>+919185785742
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
                <i class="bi bi-question-octagon-fill fs-16"></i>
              </div>
              <div className="content">
                <h6>Pro Quality Support</h6>
                <p className="mb-0 fs-14">24/7 Live support.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <footer>
        <Container fluid className="footer">
          <Container className="py-4 fs-16">
            <Row className="gy-3 gy-xl-0">
              <Col xs={12} xl={4}>
                <Row className="justify-content-center justify-content-xl-start">
                  <Col xs={"auto"}>
                    <i class="bi bi-facebook"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i class="bi bi-twitter"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i class="bi bi-instagram"></i>
                  </Col>
                  <Col xs={"auto"}>
                    <i class="bi bi-discord"></i>
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
      </footer> */}
    </React.Fragment>
  );
};

export default Footer;