import React from "react";
import { Col, Row } from "reactstrap";

const StrengthChecker = ({ password }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return <span></span>;
    } else if (passwordLength <= 4) {
      return <span className="text-danger">Very Weak</span>;
    } else if (passwordLength < 8) {
      return <span className="text-danger">Poor</span>;
    } else if (passwordLength < 12) {
      return <span className="text-warning">Medium</span>;
    } else if (passwordLength < 16) {
      return <span className="text-success">Strong</span>;
    } else {
      return <span className="text-success">Very Strong</span>;
    }
  };
  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return;
  return (
    <React.Fragment>
      <Row className="my-4">
        <Col>
          <h5 className="mb-0">Strength</h5>
        </Col>
        <Col xs={"auto"}>
          <h5 className="mb-0 fw-semibold">{passwordStrength}</h5>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default StrengthChecker;
