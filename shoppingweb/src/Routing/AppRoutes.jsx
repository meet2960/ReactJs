import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Components/Login/Login";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  const [accessToken, setAccessToken] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={"/error"} element={<ErrorPage />} />
          {access_token ? (
            <React.Fragment>
              <Route path={"/*"} element={<PrivateRoutes />} />
              <Route index element={<Navigate to={"/home"} />} />
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
