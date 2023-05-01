import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFormDataChange,
  handleGeneratedFormData,
} from "../Redux/formSlice";
import { Container, Row, Col, Button, Form, Label, Input } from "reactstrap";
import Swal from "sweetalert2";
const GeneratedForm = () => {
  const formField = useSelector((state) => state.formFields);
  const formData = useSelector((state) => state.formData);
  const userData = useSelector((state) => state.userData);
  useEffect(() => {
    console.log("Form Data is : ", formData);
  }, [formData]);
  const handleSubmitData = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Your Data has been Submitted Successfully...!!!");
        console.log("User Data is : ", userData);
        dispatch(handleGeneratedFormData());
        navigate("/");
      }
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container fluid={true} className="back-bg">
      <Form action="" name="generatedForm">
        {formField.length !== 0 ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} className=" bg-light-subtle back-bs p-5 rounded-3">
                  <h2 className="text-center">Registration Form</h2>
                  <Row className="g-4">
                    {formField.map((items, index) => {
                      if (items.category === "inputField") {
                        return (
                          <Col lg={12} key={index}>
                            <Label
                              className="form-label fw-600"
                              htmlFor={`customTextbox-${index}`}
                            >
                              {items.label ? `${items.label}` : "Label"}
                            </Label>
                            <Input
                              className="form-control"
                              type={items.type}
                              placeholder={items.placeholder}
                              name={items.name}
                              id={`customTextbox-${index}`}
                              onChange={(e) =>
                                dispatch(
                                  handleFormDataChange({
                                    value: e.target.value,
                                    names: e.target.name,
                                  })
                                )
                              }
                            />
                          </Col>
                        );
                      } else if (items.category === "selectField") {
                        return (
                          <Col lg={12} key={index}>
                            <Label
                              htmlFor={`customdropdown-${index}`}
                              className="form-label fw-600"
                            >
                              {items.label ? `${items.label}` : "Select"}
                            </Label>
                            <select
                              name={items.name}
                              id={`customdropdown-${index}`}
                              className="form-select"
                              onChange={(e) =>
                                dispatch(
                                  handleFormDataChange({
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
                            <Label
                              htmlFor={`customRadio-${index}`}
                              className="form-label fw-600"
                            >
                              {items.label ? `${items.label}` : "Radio Button"}
                            </Label>
                            <Row className="g-2">
                              {items.options.map((option, index) => (
                                <Col lg={4} key={index}>
                                  <Input
                                    className="form-check-input me-2"
                                    type={items.type}
                                    name={items.name}
                                    value={option}
                                    id={`customRadio-${index}`}
                                    onChange={(e) =>
                                      dispatch(
                                        handleFormDataChange({
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
                        outline={true}
                        color="secondary"
                        className="me-3"
                        onClick={() => navigate("/")}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        outline={false}
                        color="success"
                        onClick={(e) => {
                          handleSubmitData(e);
                        }}
                      >
                        Submit Data
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
