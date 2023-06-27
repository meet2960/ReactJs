import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import DashboardPrivateRoutes from "./DashboardPrivateRoutes";

const DashboardRouting = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/error" element={<ErrorPage />} />
            {isLoggedIn ? (
              <React.Fragment>
                <Route path={"/*"} element={<DashboardPrivateRoutes />} />
                <Route index element={<Navigate to={"/dashboard"} />} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Route path="*" element={<Navigate to={"/error"} />} />
              </React.Fragment>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DashboardRouting;
