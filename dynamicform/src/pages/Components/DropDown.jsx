import React from "react";
import {
  handleInputFieldsChange,
  handleAddSelectedOptionField,
  handleDeleteSelectedOptionField,
  handleDeleteFeilds,
} from "../../Redux/formSlice";
import { useDispatch } from "react-redux";
import { Row, Col, Label, Button } from "reactstrap";
const DropDown = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <Row className="border mt-2 b-shadow align-items-center p-3" key={index}>
      <Col lg={4}>
        <h5 className="text-center">DropDown Field</h5>
        <Row>
          <Col lg={7}>
            <label
              htmlFor={`${items.category}-${index}`}
              className="form-label fw-600"
            >
              {items.label ? items.label : "Label"}
            </label>
            <select
              name={`${items.name}-${index}`}
              id={`${items.category}-${index}`}
              className="form-select"
            >
              <option>Select</option>
              {items.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Col>
      <Col lg={8}>
        <h5>Options Here</h5>
        <Row className="align-items-center justify-content-between">
          <Col lg={3}>
            <label className="form-label">Label:</label>
            <input
              className="form-control"
              type="text"
              name="label"
              value={items.label}
              onChange={(e) =>
                dispatch(
                  handleInputFieldsChange({
                    index: index,
                    value: e.target.value,
                    name: e.target.name,
                  })
                )
              }
            />
          </Col>
          <Col lg={5}>
            <label className="form-label">Enter Options:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter an Option"
              onBlur={(e) => {
                if (e.target.value !== "") {
                  dispatch(
                    handleAddSelectedOptionField({
                      index: index,
                      value: e.target.value,
                    })
                  );
                  e.target.value = "";
                }
              }}
            />
          </Col>
          {/* <Col lg={1} className="d-flex flex-column">
            <label htmlFor="" className="form-label">
              Add
            </label>
            <button className="btn btn-outline-success">+</button>
          </Col> */}
          <Col lg={1} className="d-flex flex-column">
            <label className="form-label">Del</label>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() =>
                dispatch(handleDeleteSelectedOptionField({ index: index }))
              }
            >
              -
            </button>
          </Col>
          <Col lg={1} className="d-flex flex-column align-items-center">
            <label htmlFor="" className="form-label">
              Delete
            </label>
            <div>
              <Button
                type="button"
                color="danger"
                outline={true}
                onClick={() => dispatch(handleDeleteFeilds({ index: index }))}
              >
                X
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DropDown;