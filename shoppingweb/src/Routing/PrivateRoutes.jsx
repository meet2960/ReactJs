import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import SuspensedView from "../Components/Common/SuspensedView";

const Category = lazy(() => import("../pages/Category/Category"));
const ShowProductDetail = lazy(() =>
  import("../pages/ProductDetail/ShowProductDetail")
);
const Wishlist = lazy(() => import("../pages/Wishlist/Wishlist"));
const AllProducts = lazy(() => import("../pages/AllProducts/AllProducts"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Checkout = lazy(() => import("../pages/Checkout.jsx/Checkout"));
const Orders = lazy(() => import("../pages/Orders/Orders"));
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
