import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "./Home";
import Login from "../Components/Login/Login";
import Footer from "../Components/Footer/Footer";
import ShowProductDetail from "./ShowProductDetail";
import CartOffCanvas from "../Components/Cart/CartOffCanvas";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <CartOffCanvas />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/productdetails/:id" element={<ShowProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
