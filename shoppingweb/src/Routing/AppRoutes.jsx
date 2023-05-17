import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Components/Login/Login";

const AppRoutes = () => {
  const [accessToken, setAccessToken] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={"/error"} element={<ErrorPage />} />
          {accessToken ? (
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
