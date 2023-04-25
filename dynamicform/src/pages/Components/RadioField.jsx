import React from "react";
import { useDispatch } from "react-redux";
import { handleInputFieldsChange } from "../../Redux/formSlice";
import { Row, Col, Label, Button } from "reactstrap";
const RadioField = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <Row className="border b-shadow mt-2 align-items-center p-3" key={index}>
      <Col lg={4}>
        <h5 className="text-center">Radio Button</h5>
        <label htmlFor="" className="form-label fw-600 w-100">
          {items.label ? items.label : "Label"}
        </label>
        <Row className="g-2">
          {items.options.map((option, index) => (
            <Col lg={4} key={index}>
              <input
                className="form-check-input me-2"
                type={items.type}
                name={items.name}
                value={option}
              />
              {option}
            </Col>
          ))}
        </Row>
      </Col>
      <Col lg={8}>
        <h5>Options Here</h5>
        <Row className="justify-content-between">
          <Col lg={2}>
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
          <Col lg={3}>
            <label htmlFor="" className="form-label">
              Enter Radio Name
            </label>
            <input
              className="form-control"
              name="name"
              value={items.name}
              type="text"
              placeholder="Enter Name"
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
          <Col lg={3}>
            <label htmlFor="" className="form-label">
              Enter Options
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Option"
              /* onBlur={(e) => {
                if (e.target.value === "") {
                } else {
                  handleAddRadioOptionField(index, e.target.value);
                  e.target.value = "";
                }
              }} */
            />
          </Col>
          {/* <Col lg={"auto"} className="d-flex flex-column">
            <label htmlFor="" className="form-label">
              Add
            </label>
            <Button
              type="button"
              outline={true}
              color="success"
              //   onClick={handleButtonAddRadioOption}
            >
              +
            </Button>
          </Col> */}
          <Col lg={"auto"} className="d-flex flex-column">
            <label htmlFor="" className="form-label">
              Del
            </label>
            <Button
              type="button"
              outline={true}
              color="secondary"
              //   onClick={(e) => handleDeleteSelectOptionField(index)}
            >
              -
            </Button>
          </Col>
          <Col lg={"auto"} className="d-flex flex-column align-items-center">
            <label htmlFor="" className="form-label">
              Delete
            </label>
            <div>
              <Button
                type="button"
                outline={true}
                color="danger"
                // onClick={handleDeleteFields}
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

export default RadioField;