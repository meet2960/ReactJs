import React, { useEffect, useState } from "react";
import { Col, Container, Row, Label } from "reactstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput } from "../Login/FormikInput";
import Select from "react-select";
import citiesData from "../../utils/cities.json";
import Swal from "sweetalert2";
import { addToOrders } from "../../Redux/orders/ordersSlice";
import { deleteCart } from "../../Redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { qunatityTotal } from "../../utils/cartTotal";
const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    state: "",
    city: "",
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
    locality: Yup.string().required("Locality is Required"),
    address: Yup.string().required("Address is Required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
  });
  const [selectedState, setSelectedState] = useState(null);
  const handleOptionChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };
  const filterCitiesOption = citiesData
    .filter((items, index) => {
      return selectedState === items.state;
    })
    .map((items, index) => {
      return { value: items.name, label: items.name };
    })
    .sort((a, b) => a.value.localeCompare(b.value));

  console.log("Filteted Cities", filterCitiesOption);
  const handleOrderSubmit = (values) => {
    console.log("Address Values", values);
    let priceDetailsObj = JSON.parse(sessionStorage.getItem("priceDetailsObj"));
    console.log("All Price Details", priceDetailsObj);
    let orderDetails = {
      address: values,
      cart: cartItems,
      totalQuantity: qunatityTotal(cartItems),
      totalItems: cartItems.length,
      orderStatus: "pending",
      ...priceDetailsObj,
    };
    console.log("Order Details in Page Object", orderDetails);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Order Placed Successfully",
      showConfirmButton: true,
      timer: 3000,
      confirmButtonText: "Go Home",
    }).then(() => {
      dispatch(addToOrders(orderDetails));
      dispatch(deleteCart());
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
              {({ values, handleSubmit, setFieldValue }) => (
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
                      <Label htmlFor="state">State</Label>
                      <Field name="state">
                        {({ field }) => (
                          <div className="custom-select-container fs-14">
                            <Select
                              className="react-select-container"
                              classNamePrefix="custom-react-select"
                              id="state"
                              options={statesOptions}
                              value={statesOptions.find(
                                (option) => option.value === values.state
                              )}
                              onChange={(option) => {
                                setFieldValue("state", option.value);
                                handleOptionChange(option.value);
                              }}
                              onBlur={field.onBlur}
                            />
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name={"state"}
                        component={"div"}
                        className="text-danger position-absolute fs-14"
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="city">Cities</Label>
                      <Field name="city">
                        {({ field }) => (
                          <div className="custom-select-container fs-14">
                            <Select
                              className="react-select-container"
                              classNamePrefix="custom-react-select"
                              id="city"
                              options={filterCitiesOption}
                              value={filterCitiesOption.find(
                                (option) => option.value === values.city
                              )}
                              onChange={(option) => {
                                setFieldValue("city", option.value);
                              }}
                              onBlur={field.onBlur}
                            />
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name={"city"}
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
                            // console.log("Errors", errors);
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
