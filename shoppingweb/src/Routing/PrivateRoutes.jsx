import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import SuspensedView from "../Components/Common/SuspensedView";

const Category = lazy(() => import("../Pages/Category/Category"));
const ShowProductDetail = lazy(() =>
  import("../Pages/ProductDetail/ShowProductDetail")
);
const Wishlist = lazy(() => import("../Pages/Wishlist/Wishlist"));
const AllProducts = lazy(() => import("../Pages/AllProducts/AllProducts"));
const Profile = lazy(() => import("../Pages/Profile/Profile"));
const Cart = lazy(() => import("../Pages/Cart/Cart"));
const Checkout = lazy(() => import("../Pages/Checkout.jsx/Checkout"));
const Orders = lazy(() => import("../Pages/Orders/Orders"));
const OrderDetails = lazy(() => import("../Components/Orders/OrderDetails"));
const OrderList = lazy(() => import("../Components/Orders/OrderList"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"home"} element={<Home />} />
        <Route
          path={"category"}
          element={
            <SuspensedView>
              <Category />
            </SuspensedView>
          }
        />
        <Route
          path={"allproducts"}
          element={
            <SuspensedView>
              <AllProducts />
            </SuspensedView>
          }
        />
        <Route
          path={"productdetails/:id"}
          element={
            <SuspensedView>
              <ShowProductDetail />
            </SuspensedView>
          }
        />
        <Route
          path={"wishlist"}
          element={
            <SuspensedView>
              <Wishlist />
            </SuspensedView>
          }
        />
        <Route
          path={"profile"}
          element={
            <SuspensedView>
              <Profile />
            </SuspensedView>
          }
        />
        <Route
          path={"cart"}
          element={
            <SuspensedView>
              <Cart />
            </SuspensedView>
          }
        />
        <Route
          path={"checkout"}
          element={
            <SuspensedView>
              <Checkout />
            </SuspensedView>
          }
        />
        <Route
          path={"orders"}
          element={
            <SuspensedView>
              <Orders />
            </SuspensedView>
          }
        >
          <Route
            path=""
            element={
              <SuspensedView>
                <OrderList />
              </SuspensedView>
            }
          />
          <Route
            path={":id"}
            element={
              <SuspensedView>
                <OrderDetails />
              </SuspensedView>
            }
          />
        </Route>
        <Route path={"/*"} element={<Navigate to={"/error"} />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
