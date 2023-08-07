import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import LoginForm from "../../Components/Login/LoginForm";
import { NavLink } from "react-router-dom";

const Login = () => {
  document.title = "Login | Ecommerce";
  return (
    <div className="login py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="overflow-hidden">
              <Row className="gx-0 justify-content-center align-items-center">
                <Col lg={12}>
                  <div className="px-5 py-4">
                    {/* <LoginWithOTP /> */}
                    <h2 className="my-4 text-primary text-center">
                      Welcome Back !
                    </h2>
                    <LoginForm />
                    <div className="my-3">
                      <h6 className="text-center mb-3 fs-16">
                        Or Signup Using
                      </h6>
                      <Row className="justify-content-center align-items-center">
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
                      </Row>
                    </div>
                    <h6 className="text-center mb-0">
                      Not a Member ?{" "}
                      <NavLink to={"/register"} className={"text-primary"}>
                        Create an Account
                      </NavLink>
                    </h6>
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