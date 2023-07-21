import React from "react";
import { Col, Row } from "reactstrap";

const StrengthChecker = ({ password }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
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
