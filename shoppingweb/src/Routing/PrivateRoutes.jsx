import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import ShowProductDetail from "../Pages/ProductDetail/ShowProductDetail";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Profile from "../Pages/Profile/Profile";
import Cart from "../Pages/Cart/Cart";
import NewComponent from "../Pages/ExtraPages/NewComponent";
import CustomDateTime from "../Pages/ExtraPages/CutomDateTime";
import EnterInfo from "../Pages/ExtraPages/EnterInfo";
import ChooseDate from "../Pages/ExtraPages/ChooseDate";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/productdetails/:id"} element={<ShowProductDetail />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/date"} element={<ChooseDate />} />
        <Route path={"/*"} element={<Navigate to={"/error"} />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
