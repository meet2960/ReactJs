import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import RegisterForm from "../../Components/Register/RegisterForm";

const Register = () => {
  document.title = "Register | Ecommerce";
  return (
    <div className="register py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="overflow-hidden">
              <Row className="gx-0 justify-content-center align-items-center">
                <Col lg={12}>
                  <div className="px-5 py-4">
                    <h2 className="my-4 text-primary text-center">
                      Register Here !
                    </h2>
                    <RegisterForm />
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

export default Register;
