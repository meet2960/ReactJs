import React from "react";
import { Col, Row } from "reactstrap";

const CommonHeading = ({ heading }) => {
  return (
    <React.Fragment>
      <Row className="gx-0">
        <Col>
          <div className="heading-title mb-4">
            <h3 className="mb-0">{heading}</h3>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CommonHeading;
