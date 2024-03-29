import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput } from "../Login/FormikInput";
import { Col, Label, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserList } from "../../store/auth/createUserAction";

const RegisterForm = () => {
  const dispatch = useDispatch();
  // ? To Toggle Password Field
  const [togglePassword, setTogglePassword] = useState({
    togglePass: false,
    toggleCnfPass: false,
  });
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Please Enter Valid Email")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        RegExp("(.*[a-z].*)"),
        "Password must contain at least one lowercase letter."
      )
      .matches(
        RegExp("(.*[0-9].*)"),
        "Password must contain at least one number."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Registered Values", values);
          dispatch(
            createUserList({ email: values.email, password: values.password })
          );
        }}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <React.Fragment>
            <Form>
              <Row className="gy-md-2">
                <Col lg={12}>
                  <div className="pb-3 position-relative">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      type={"email"}
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      component={FormikInput}
                    />
                    <ErrorMessage
                      name={"email"}
                      component={"div"}
                      className="text-danger position-absolute fs-14"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="pb-3 position-relative">
                    <Label htmlFor="password" className="fs-16">
                      Password
                    </Label>
                    <div className="position-relative">
                      <Field
                        type={togglePassword.togglePass ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        component={FormikInput}
                      />
                      <button
                        className={`btn btn-link position-absolute text-decoration-none text-muted password-addon show-btn`}
                        type="button"
                        id="password-btn"
                        onClick={() =>
                          setTogglePassword((prev) => ({
                            ...prev,
                            togglePass: !prev.togglePass,
                          }))
                        }
                      >
                        {!togglePassword.togglePass ? (
                          <i className="bi bi-eye-slash-fill" />
                        ) : (
                          <i className="bi bi-eye-fill" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name={"password"}
                      component={"div"}
                      className="text-danger position-absolute fs-14"
                    />
                  </div>
                </Col>
                {/* // ? Confirm Password  */}
                <Col lg={12}>
                  <div className="pb-3 position-relative">
                    <Label htmlFor="password" className="fs-16">
                      Password
                    </Label>
                    <div className="position-relative">
                      <Field
                        type={
                          togglePassword.toggleCnfPass ? "text" : "password"
                        }
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Enter Password Again"
                        component={FormikInput}
                      />
                      <button
                        className={`btn btn-link position-absolute text-decoration-none text-muted password-addon show-btn`}
                        type="button"
                        id="cnfpassword-btn"
                        onClick={() =>
                          setTogglePassword((prev) => ({
                            ...prev,
                            toggleCnfPass: !prev.toggleCnfPass,
                          }))
                        }
                      >
                        {!togglePassword.toggleCnfPass ? (
                          <i className="bi bi-eye-slash-fill" />
                        ) : (
                          <i className="bi bi-eye-fill" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name={"confirmPassword"}
                      component={"div"}
                      className="text-danger position-absolute fs-14"
                    />
                  </div>
                </Col>
                {/* // ? Submit Button here  */}
                <Col lg={12}>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        handleSubmit();
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </Col>
                <div>
                  <h6 className="text-center mt-2">
                    Already a Member ?{" "}
                    <NavLink className={"text-primary"} to={"/login"}>
                      Log In
                    </NavLink>
                  </h6>
                </div>
              </Row>
            </Form>
          </React.Fragment>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RegisterForm;