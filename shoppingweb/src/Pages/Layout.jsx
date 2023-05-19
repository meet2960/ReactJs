import React from "react";
import Header from "../Components/Header/Header";
import CartOffCanvas from "../Components/Cart/CartOffCanvas";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import BackToTopButton from "../Components/Common/BackToTopButton";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <CartOffCanvas />
      <div className="main-content">
        <Outlet />
        <Footer />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Layout;