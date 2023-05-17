import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import loginImage from "../../assets/images/login-image.jpg";

const Login = () => {
  document.title = "Login | Ecommerce";
  return (
    <div className="login py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="overflow-hidden">
              <Row className="gx-0 justify-content-center align-items-center">
                <Col lg={6}>
                  <img src={loginImage} alt="login" className="img-fluid" />
                </Col>
                <Col lg={6}>
                  <div className="p-lg-5 p-4">
                    <h5 className="mb-4 text-primary">Welcome Back !</h5>
                    <LoginForm />
                    <div className="mt-3">
                      <h6 className="text-center mb-2 fs-16">
                        Or Signup Using
                      </h6>
                      <div className="row justify-content-center align-items-center">
                        <Col xs={"auto"}>
                          <button className="btn btn-sm btn-dark" type="button">
                            <i className="bi bi-facebook fs-14"></i>
                          </button>
                        </Col>
                        <Col xs={"auto"}>
                          <button className="btn btn-sm btn-dark" type="button">
                            <i className="bi bi-google fs-14"></i>
                          </button>
                        </Col>
                        <Col xs={"auto"}>
                          <button className="btn btn-sm btn-dark" type="button">
                            <i className="bi bi-apple fs-14"></i>
                          </button>
                        </Col>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;