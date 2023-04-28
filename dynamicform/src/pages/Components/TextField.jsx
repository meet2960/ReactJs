import React from "react";
import { useDispatch } from "react-redux";
import { handleInputFieldsChange } from "../../Redux/formSlice";
import { Row, Col, Label } from "reactstrap";
import DeleteFeildButton from "./DeleteFeildButton";
const TextField = ({ items, index }) => {
  const inputTypesList = [
    "text",
    "number",
    "password",
    "email",
    "date",
    "time",
    "color",
    "image",
  ];
  const dispatch = useDispatch();
  return (
    <Row className="border mt-3 align-items-center b-shadow p-3" key={index}>
      <Col lg={4}>
        <h5 className="text-center">Input Field</h5>
        <Label
          className="form-label fw-600"
          htmlFor={`${items.category}-${index}`}
        >
          {items.label ? items.label : "Label"}
        </Label>
        <Row className="align-items-end">
          <Col lg={6}>
            <input
              className="form-control"
              name={items.name}
              // name={`${items.label ? items.label : items.name}`}
              // name={`${items.name}-${index}`}
              id={`${items.category}-${index}`}
              type={items.type}
              placeholder={items.placeholder}
              required={items.required}
            />
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
          <Col lg={3}>
            <label className="form-label">Placeholder:</label>
            <input
              className="form-control"
              type="text"
              name="placeholder"
              value={items.placeholder}
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
            <label className="form-label">Type:</label>
            <select
              className="form-select"
              name="type"
              value={items.type}
              onChange={(e) =>
                dispatch(
                  handleInputFieldsChange({
                    index: index,
                    value: e.target.value,
                    name: e.target.name,
                  })
                )
              }
            >
              {inputTypesList &&
                inputTypesList.map((items, index) => {
                  return (
                    <>
                      <option value={items}>{items.toUpperCase()}</option>
                    </>
                  );
                })}
            </select>
          </Col>
          <Col lg={2} className="d-flex flex-column align-items-center">
            <label htmlFor="" className="form-label">
              Delete
            </label>
            <div>
              <DeleteFeildButton index={index} />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TextField;
