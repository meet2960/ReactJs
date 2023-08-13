import React from "react";
import Header from "../components/Header/Header";
import CartOffCanvas from "../components/Cart/CartOffCanvas";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import BackToTopButton from "../components/Common/BackToTopButton";

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
