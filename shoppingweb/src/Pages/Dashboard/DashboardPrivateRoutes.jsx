import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Homedashboard from "./Homedashboard";
import Userlist from "./Userlist";

const DashboardPrivateRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Homedashboard />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path={"/*"} element={<Navigate to={"/error"} />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default DashboardPrivateRoutes;
