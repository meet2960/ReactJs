import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import ErrorPage from "./Components/Common/ErrorPage";
import Home from "./Home";
const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
