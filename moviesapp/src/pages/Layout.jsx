import React from "react";
import {
  BrowserRouter as Router,
  Rputes,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import ErrorPage from "./Components/Common/ErrorPage";
import ShowMovies from "./ShowMovies";
const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShowMovies />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
