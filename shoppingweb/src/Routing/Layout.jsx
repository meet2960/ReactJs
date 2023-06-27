import React from "react";
import Header from "../Components/Header/Header";
import CartOffCanvas from "../Components/Cart/CartOffCanvas";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import BackToTopButton from "../Components/Common/BackToTopButton";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="layout-wrapper">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartOffCanvas />
      <BackToTopButton />
    </React.Fragment>
  );
};

export default Layout;
