import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar";
import DisplayProduct from "./DisplayProduct";
import OffCanvas from "./Common/OffCanvas";
import ShowProduct from "./ShowProduct";
import ErrorPage from "./Common/ErrorPage";
import Login from "./Login";
import Category from "./Category";
import Checkout from "./Checkout";
import Footer from "./Common/Footer";
import Protected from "./Protected";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
const Routing = () => {
  const login = useSelector((state) => state.isLoggedIn);
  return (
    <Router>
      <Navbar />
      <OffCanvas />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <>
              <DisplayProduct />
              <Footer />
            </>
          }
        />
        <Route exact path="/showproduct/:id" element={<ShowProduct />} />

        {/* <Route path="category" element={<Category />} /> */}
        <Route
          path="/category"
          element={
            <Protected isSignedIn={login}>
              <Category />
            </Protected>
          }
        />

        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route
          path="/checkout"
          element={
            <Protected isSignedIn={login}>
              <Checkout />
            </Protected>
          }
        />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
