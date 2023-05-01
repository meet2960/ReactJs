import React from "react";
import {
  handleInputFieldsChange,
  handleDeleteSelectedOptionField,
  handleAddInputOptionField,
} from "../../Redux/formSlice";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Label, Input } from "reactstrap";
import DeleteFeildButton from "./DeleteFeildButton";
const DropDown = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="border mt-3 align-items-center shadow p-4 rounded-3"
      key={index}
    >
      <Col lg={4}>
        <h5 className="text-center">DropDown Field</h5>
        <Row>
          <Col lg={7}>
            <Label
              htmlFor={`${items.category}-${index}`}
              className="form-label fw-600"
            >
              {items.label ? items.label : "Label"}
            </Label>
            <select
              name={items.name}
              // name={`${items.name}-${index}`}
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
            <Label className="form-label">Label:</Label>
            <Input
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
            <Label className="form-label">Enter Options:</Label>
            <Input
              className="form-control"
              type="text"
              placeholder="Enter an Option"
              onKeyDownCapture={(e) => {
                if (e.key === "Enter") {
                  dispatch(
                    handleAddInputOptionField({
                      index: index,
                      value: e.target.value,
                    })
                  );
                  e.target.value = "";
                }
              }}
              /* onBlur={(e) => {
                if (e.target.value !== "") {
                  dispatch(
                    handleAddInputOptionField({
                      index: index,
                      value: e.target.value,
                    })
                  );
                  e.target.value = "";
                }
              }} */
            />
          </Col>
          <Col lg={1} className="d-flex flex-column">
            <Label className="form-label">Del</Label>
            <Button
              type="button"
              outline={true}
              color="secondary"
              onClick={() =>
                dispatch(handleDeleteSelectedOptionField({ index: index }))
              }
            >
              -
            </Button>
          </Col>
          <Col lg={1} className="d-flex flex-column align-items-center">
            <DeleteFeildButton index={index} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DropDown;
