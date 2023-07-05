import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Daily from "../Pages/Daily";
const AppRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/daily" element={<Daily />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
