import React, { useEffect, useState } from "react";
import { Col, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikInput } from "./FormikInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/auth/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.auth.access_token);
  useEffect(() => {
    console.log("LoginInfo : ", loginInfo);
  }, [loginInfo]);
  const [showPassword, setShowPassword] = useState(false);
  const initValue = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email().required("Enter valid Email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        RegExp("(.*[a-z].*)"),
        "Password must contain at least one lowercase letter."
      )
      .matches(
        RegExp("(.*[A-Z].*)"),
        "Password must contain at least one uppercase letter."
      )
      .matches(
        RegExp("(.*[0-9].*)"),
        "Password must contain at least one number."
      )
      .matches(
        RegExp("(.*[!@#$%^&*].*)"),
        "Password must contain at one special character."
      ),
  });
  return (
    <React.Fragment>
      <h3 className="mb-4 text-primary text-center">Welcome Back !</h3>
      <Formik
        initialValues={initValue}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Values Are : ", values);
          dispatch(login());
          navigate("/home");
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <React.Fragment>
            <Form>
              <Row className="gy-md-2">
                <Col lg={12}>
                  <div className="pb-3 position-relative">
                    <Label htmlFor="email">Username</Label>
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
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        component={FormikInput}
                      />
                      <button
                        className={`btn btn-link position-absolute text-decoration-none text-muted password-addon show-btn`}
                        type="button"
                        id="password-addon"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? (
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
                <Col lg={12}>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Login
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </React.Fragment>
        )}
      </Formik>
      <div className="mt-3">
        <h6 className="text-center mb-2 fs-16">Or Signup Using</h6>
        <div className="row justify-content-center align-items-center">
          <Col xs={"auto"}>
            <button className="btn btn-sm btn-dark" type="button">
              <i className="bi bi-facebook fs-14"></i>
            </button>
          </Col>
          <Col xs={"auto"}>
            <button className="btn btn-sm btn-dark" type="button">
              <i className="bi bi-google fs-14"></i>
            </button>
          </Col>
          <Col xs={"auto"}>
            <button className="btn btn-sm btn-dark" type="button">
              <i className="bi bi-apple fs-14"></i>
            </button>
          </Col>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;