import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import ShowProductDetail from "../Pages/ShowProductDetail";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/category"} element={<Category />} />
        <Route path="/productdetails/:id" element={<ShowProductDetail />} />
        {/* <Route path={"/*"} element={<Navigate to={"/error"} />} /> */}
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;