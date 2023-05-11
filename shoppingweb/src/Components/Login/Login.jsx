import React from "react";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";

const Login = () => {
  document.title = "Login | Ecommerce";
  return (
    <Container className="login">
      <Row>
        <Col className="mx-auto shadow p-4 p-md-5 rounded-3" lg={6}>
          <h2 className="mb-4">Login</h2>
          <LoginForm />
          <div className="mt-4">
            <h6 className="text-center mb-3">Or Signup Using</h6>
            <div className="row justify-content-center align-items-center">
              <Col xs={"auto"}>
                <button className="btn btn-dark" type="button">
                  <i class="bi bi-facebook fs-18"></i>
                </button>
              </Col>
              <Col xs={"auto"}>
                <button className="btn btn-dark" type="button">
                  <i class="bi bi-google fs-18"></i>
                </button>
              </Col>
              <Col xs={"auto"}>
                <button className="btn btn-dark" type="button">
                  <i class="bi bi-apple fs-18"></i>
                </button>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;