import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import LoginForm from "../../Components/Login/LoginForm";

const Login = () => {
  document.title = "Login | Ecommerce";
  return (
    <div className="login py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="overflow-hidden">
              <Row className="gx-0 justify-content-center align-items-center">
                {/*  <Col lg={6}>
                  <img src={loginImage} alt="login" className="img-fluid" />
                </Col> */}
                <Col lg={12}>
                  <div className="px-5 py-4">
                    {/* <LoginWithOTP /> */}
                    <LoginForm />
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