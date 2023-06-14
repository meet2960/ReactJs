import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import ShowProductDetail from "../Pages/ProductDetail/ShowProductDetail";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Profile from "../Pages/Profile/Profile";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/productdetails/:id"} element={<ShowProductDetail />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/cart"} element />
        <Route path={"/*"} element={<Navigate to={"/error"} />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
