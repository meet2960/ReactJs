import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login/Login";
import { useSelector } from "react-redux";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={"/error"} element={<ErrorPage />} />
          <Route path={"/register"} element={<Register />} />
          {access_token ? (
            <React.Fragment>
              <Route index element={<Navigate to={"/home"} />} />
              <Route path={"/*"} element={<PrivateRoutes />} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
            </React.Fragment>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
