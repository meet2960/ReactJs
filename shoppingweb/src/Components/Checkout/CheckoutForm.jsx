import React, { useEffect, useState } from "react";
import { Col, Container, Row, Label } from "reactstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput } from "../Login/FormikInput";
import Select from "react-select";
import citiesData from "../../utils/cities.json";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const navigate = useNavigate();
  //   console.log("Citites", citiesData);
  const uniqueStates = [
    ...new Set(citiesData.map((items) => items.state)),
  ].sort();
  //   console.log("States", uniqueStates);
  const statesOptions = uniqueStates.map((items, index) => {
    return { value: items, label: items };
  });
  //   console.log("States", statesOptions);

  const initialValues = {
    name: "",
    phone: "",
    postalcode: "",
    locality: "",
    address: "",
    selectedState: "",
    selectedCity: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter valid Name"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Phone number is required"),
    postalcode: Yup.string()
      .matches(/^\d{6}$/, "Postal code must be exactly 6 digits")
      .max(6, "Postal code must be exactly 6 digits")
      .required("Postal code is required"),
    // locality: Yup.string().required("Postcode is Required"),
    address: Yup.string().required("Address is Required"),
    selectedState: Yup.string().required("State is required"),
    selectedCity: Yup.string().required("City is required"),
  });
  const [stateValue, setStateValue] = useState(null);
  const handleOptionChange = (selectedOption) => {
    setStateValue(selectedOption);
  };
  const filterCitiesOption = citiesData
    .filter((items, index) => {
      return stateValue === items.state;
    })
    .map((items, index) => {
      return { value: items.name, label: items.name };
    })
    .sort((a, b) => a.value.localeCompare(b.value));

  console.log("Filteted Cities", filterCitiesOption);
  const handleOrderSubmit = (values) => {
    console.log("Values", values);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Order Placed Successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/home");
    });
  };
  return (
    <React.Fragment>
      <Container>
        <div className="card">
          <div className="card-body p-4">
            <h3 className="my-3 pb-3 text-center border-bottom">
              Add Shipping Address
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleOrderSubmit(values)}
            >
              {({
                values,
                handleSubmit,
                handleChange,
                errors,
                setFieldValue,
              }) => (
                <Form>
                  <Row className="gy-4">
                    <Col lg={6}>
                      <Label htmlFor="name">Name</Label>
                      <Field
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        component={FormikInput}
                      />
                      <ErrorMessage
                        name={"name"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Field
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone Number"
                        component={FormikInput}
                      />
                      <ErrorMessage
                        name={"phone"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="postalcode">Pincode</Label>
                      <Field
                        name="postalcode"
                        id="postalcode"
                        placeholder="Enter Postalcode"
                        component={FormikInput}
                        maxLength={6}
                      />
                      <ErrorMessage
                        name={"postalcode"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="locality">Locality</Label>
                      <Field
                        name="locality"
                        id="locality"
                        placeholder="Enter Locality"
                        component={FormikInput}
                      />
                      <ErrorMessage
                        name={"locality"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={12}>
                      <Label htmlFor="address">Address</Label>
                      <Field
                        name="address"
                        id="address"
                        placeholder="Enter Full Address"
                        component={FormikInput}
                      />
                      <ErrorMessage
                        name={"address"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="selectedState">State</Label>
                      <Field name="selectedState">
                        {({ field }) => (
                          <div className="custom-select-container fs-14">
                            <Select
                              className="react-select-container"
                              classNamePrefix="custom-react-select"
                              id="selectedState"
                              options={statesOptions}
                              value={statesOptions.find(
                                (option) =>
                                  option.value === values.selectedState
                              )}
                              onChange={(option) => {
                                setFieldValue("selectedState", option.value);
                                handleOptionChange(option.value);
                              }}
                              onBlur={field.onBlur}
                            />
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name={"selectedState"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="selectedCity">Cities</Label>
                      <Field name="selectedCity">
                        {({ field }) => (
                          <div className="custom-select-container fs-14">
                            <Select
                              className="react-select-container"
                              classNamePrefix="custom-react-select"
                              id="selectedCity"
                              options={filterCitiesOption}
                              value={filterCitiesOption.find(
                                (option) => option.value === values.selectedCity
                              )}
                              onChange={(option) => {
                                setFieldValue("selectedCity", option.value);
                              }}
                              onBlur={field.onBlur}
                            />
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name={"selectedCity"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={12}>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            console.log("Errors", errors);
                            handleSubmit();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CheckoutForm;
