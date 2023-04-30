import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFormDataChange } from "../Redux/formSlice";
import { Container, Row, Col, Button, Form } from "reactstrap";
const GeneratedForm = () => {
  const formField = useSelector((state) => state.formFields);
  const formData = useSelector((state) => state.formData);
  useEffect(() => {
    console.log("Form Data is : ", formData);
  }, [formData]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container fluid={true}>
      <Form action="" name="generatedForm">
        {formField ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Container>
              <Row className="justify-content-center">
                <Col lg={6} className="bg-light back-bs p-5 rounded-3">
                  <h2 className="text-center">Registration Form</h2>
                  <Row className="g-3">
                    {formField.map((items, index) => {
                      if (items.category === "inputField") {
                        return (
                          <Col lg={12} key={index}>
                            <label className="form-label fw-600" htmlFor="">
                              {items.label ? `${items.label}` : "Label"}
                            </label>
                            <input
                              className="form-control"
                              type={items.type}
                              placeholder={items.placeholder}
                              name={items.name}
                              onChange={(e) =>
                                dispatch(
                                  handleFormDataChange({
                                    // index: index,
                                    value: e.target.value,
                                    names: e.target.name,
                                  })
                                )
                              }
                              // value={items.data}
                            />
                          </Col>
                        );
                      } else if (items.category === "selectField") {
                        return (
                          <Col lg={12} key={index}>
                            <label htmlFor="" className="form-label fw-600">
                              {items.label ? `${items.label}` : "Select"}
                            </label>
                            <select
                              // name={`${items.name}-${index}`}
                              name={items.name}
                              id={`customdropdown-${index}`}
                              className="form-select"
                              onChange={(e) =>
                                dispatch(
                                  handleFormDataChange({
                                    // index: index,
                                    value: e.target.value,
                                    names: e.target.name,
                                  })
                                )
                              }
                            >
                              <option>Select</option>
                              {items.options.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </Col>
                        );
                      } else if (items.category === "radioField") {
                        return (
                          <Col lg={12} key={index}>
                            <label htmlFor="" className="form-label fw-600">
                              {items.label ? `${items.label}` : "Radio Button"}
                            </label>
                            <Row className="g-2">
                              {items.options.map((option, index) => (
                                <Col lg={4} key={index}>
                                  <input
                                    className="form-check-input me-2"
                                    type={items.type}
                                    name={items.name}
                                    value={option}
                                    onChange={(e) =>
                                      dispatch(
                                        handleFormDataChange({
                                          // index: index,
                                          value: e.target.value,
                                          names: e.target.name,
                                        })
                                      )
                                    }
                                  />
                                  {option}
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        );
                      } else {
                        return null;
                      }
                    })}
                    <Col lg={12} className="d-flex justify-content-center">
                      <Button
                        type="button"
                        outline={false}
                        color="success"
                        // onClick={handleFormSubmit}
                      >
                        Submit Data
                      </Button>
                      <Button
                        type="button"
                        outline={true}
                        color="secondary"
                        className="ms-3"
                        onClick={() => navigate("/")}
                      >
                        Back
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ) : null}
      </Form>
    </Container>
  );
};

export default GeneratedForm;
