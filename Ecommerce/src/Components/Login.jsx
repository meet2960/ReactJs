import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { loggedIn } from "../Redux/cartSlice";
import * as Yup from "yup";
import Swal from "sweetalert2";
const initialValues = {
  email: "",
  password: "",
};
const NewLogin = () => {
  document.title = "Login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      // .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is Required"),
  });
  const demoUser = {
    email: "admin",
    password: "admin",
  };
  // * For the Custom Alert
  const showAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged In Successfully",
      timer: 1500,
      showConfirmButton: false,
    });
  };
  // * Submitting the Form
  const onSubmit = (values) => {
    if (
      values.name === demoUser.name &&
      values.password === demoUser.password
    ) {
      dispatch(loggedIn());
      showAlert();
      navigate("/");
    } else {
      alert("Please Enter Again");
      console.log("Username and password doesn't match");
    }
  };

  // * Toggle Password Switch
  const [passToggle, setPasswordToggle] = useState({
    tPass: false,
    tCnfPass: false,
  });
  const togglePass = (toggles) => {
    setPasswordToggle({ ...passToggle, [toggles]: !passToggle[toggles] });
  };

  /*   const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("click", Swal.stopTimer);
      toast.addEventListener("click", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  }); */
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center">
        <div className="col-lg-10 bs p-5 rounded-3">
          <form action="" className="container" name="registrationForm">
            <h1 className="text-center d-inline-block head position-relative mb-4">
              Login
            </h1>
            <div className="row">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ handleSubmit }) => (
                  <>
                    <div className="col-lg-12 mb-4">
                      <div className="form-floating">
                        <Field
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Enter Email"
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>
                      {
                        <ErrorMessage
                          name="email"
                          component="label"
                          className="text-danger"
                        />
                      }
                    </div>
                    <div className="col-lg-12 mb-4">
                      <div className="form-floating position-relative">
                        <Field
                          type={passToggle.tPass ? "text" : "password"}
                          className="form-control"
                          name="password"
                          placeholder="Enter Password"
                        />

                        <label htmlFor="floatingInput">Password</label>

                        <div className="form-check form-switch position-absolute tg">
                          <div
                            type="button"
                            className=""
                            onClick={() => togglePass("tPass")}
                          >
                            {!passToggle.tPass ? (
                              <i className="bi bi-eye-slash-fill" />
                            ) : (
                              <i className="bi bi-eye-fill" />
                            )}
                          </div>
                          {/*   <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="tPass"
                            onClick={() => togglePass("tPass")}
                          /> */}
                        </div>
                      </div>
                      {
                        <ErrorMessage
                          name="password"
                          component="label"
                          className="text-danger"
                        />
                      }
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </button>
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
