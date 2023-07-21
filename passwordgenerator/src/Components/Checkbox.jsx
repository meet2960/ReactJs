import React from "react";
import { Col } from "reactstrap";

const Checkbox = ({ items, index, onChange }) => {
  return (
    <React.Fragment>
      <Col lg={6} key={index}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={items.state}
            onChange={() => onChange(index)}
            id={`input-checkbox-${index}`}
          />
          <label
            className="form-check-label"
            htmlFor={`input-checkbox-${index}`}
          >
            {items.title}
          </label>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Checkbox;
