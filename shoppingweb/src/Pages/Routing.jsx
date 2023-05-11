import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";
import Login from "../Components/Login/Login";
import Footer from "../Components/Footer/Footer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
