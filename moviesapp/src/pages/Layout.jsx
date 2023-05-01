import React from "react";
import {
  BrowserRouter as Router,
  Rputes,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ShowMovies from "./ShowMovies";
const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowMovies />}></Route>
      </Routes>
    </Router>
  );
};

export default Layout;
