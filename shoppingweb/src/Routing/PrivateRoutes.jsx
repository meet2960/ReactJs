import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import ShowProductDetail from "../Pages/ProductDetail/ShowProductDetail";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Profile from "../Pages/Profile/Profile";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout.jsx/Checkout";
import Orders from "../Pages/Orders/Orders";
import OrderDetails from "../Components/Orders/OrderDetails";
import OrderList from "../Components/Orders/OrderList";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"home"} element={<Home />} />
        <Route path={"category"} element={<Category />} />
        <Route path={"productdetails/:id"} element={<ShowProductDetail />} />
        <Route path={"wishlist"} element={<Wishlist />} />
        <Route path={"profile"} element={<Profile />} />
        <Route path={"cart"} element={<Cart />} />
        <Route path={"checkout"} element={<Checkout />} />
        <Route path={"orders"} element={<Orders />}>
          <Route path="" element={<OrderList />} />
          <Route path={":id"} element={<OrderDetails />} />
        </Route>
        <Route path={"/*"} element={<Navigate to={"/error"} />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
