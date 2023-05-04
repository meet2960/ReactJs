import React from "react";
import { Container } from "reactstrap";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import SearchNote from "../Components/SearchNote";
const Home = () => {
  return (
    <div className="min-100vh d-flex flex-column back-bg">
      <Header />
      <div className="flex-grow-1 d-flex flex-column">
        {/* <h1 className="text-center">Welcome to Notes App</h1> */}
        <Container className="my-4">
            <SearchNote />
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;