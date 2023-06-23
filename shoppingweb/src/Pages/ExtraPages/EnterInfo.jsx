import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

const EnterInfo = () => {
  const initialValues = {
    firstName: "",
    // lastName: "",
    email: "",
    date: "",
    phone: "",
    notes: "",
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    /*   lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"), */
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date()
      .required("Date of Birth is required")
      .max(new Date(), "Birthdate cannot be in the future"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(9)
      .required("A phone number is required"),
    notes: Yup.string()
      .min(15, "Too Short!")
      .max(75, "Too Long!")
      .required("Required"),
  });

  const handleFormSubmit = (values, e) => {
    sessionStorage.setItem("formData", JSON.stringify(values));
  };

  return (
    <div>
      <section id="hero-infopage">
        <div className="container">
          <div className="container justify-content-center align-items-center">
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("Form Values ", values);
                handleFormSubmit(values);
              }}
            >
              {({ errors, touched, handleSubmit }) => (
                <Form className="w-50 mobile-width-100 mx-auto ">
                  <div className="mb-2 mb-md-4 d-flex mobile_form">
                    <Field
                      name="firstName"
                      className="text-field mobile-width-100 mb-3 mb-lg-0  me-0 me-md-5 p-3 w-50"
                      placeholder="Clients Full Name*"
                      id="firstName"
                    />
                    <ErrorMessage name={"firstName"} component={"div"} />
                    {/* {errors &&
                    errors.firstName &&
                    touched &&
                    touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null} */}

                    <Field
                      name="email"
                      type="email"
                      className="text-field p-3 w-50 mb-3 mb-lg-0 mobile-width-100"
                      placeholder="Email"
                      id="email"
                      // value={formValues.email}
                    />
                    <ErrorMessage name={"email"} component={"div"} />
                    {/*  {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null} */}
                  </div>
                  <div className="mb-2 mb-md-4 d-flex mobile_form">
                    <Field
                      name="date"
                      type="date"
                      className="text-field me-0 me-md-5 p-3 mb-3 mb-lg-0 mobile-width-100 w-50"
                      placeholder="date"
                    />
                    <ErrorMessage name={"date"} component={"div"} />
                    {/*  {errors.date && touched.date ? (
                      <div>{errors.date}</div>
                    ) : null} */}

                    <Field
                      name="phone"
                      type="phone"
                      className="text-field p-3 mb-3 mb-lg-0 mobile-width-100 w-50"
                      placeholder="phone"
                      id="phone"
                      // value={formValues.phone}
                    />
                    <ErrorMessage name={"phone"} component={"div"} />
                    {/* {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>
                    ) : null} */}
                  </div>

                  <Field
                    name="notes"
                    type="text"
                    className="text-field  me-0 me-md-5 mobile-width-100 mb-3 mb-lg-0 p-3 w-100"
                    placeholder="Note / Message*"
                    id="notes"
                    // value={formValues.notes}
                  />
                  <ErrorMessage name={"notes"} component={"div"} />

                  {/*     {errors.notes && touched.notes ? (
                    <div>{errors.notes}</div>
                  ) : null} */}
                  <div className="d-flex mt-4 align-items justify-content-center">
                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit();
                        console.log("Errors Are", errors);
                      }}
                      className="primary-bg ms-4 fw-bold border-0 px-4  py-3 rounded-3"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterInfo;
