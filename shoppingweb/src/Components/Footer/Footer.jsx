import React from "react";
import { Col, Container, Row } from "reactstrap";
import paypalLogo from "../../assets/images/PaypalLogo.png";
import visaLogo from "../../assets/images/VisaLogo.png";
import masterLogo from "../../assets/images/MasterCardLogo.png";

const Footer = () => {
  return (
    <React.Fragment>
      {/* <NewsLetter /> */}
      {/* <OurServices /> */}
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