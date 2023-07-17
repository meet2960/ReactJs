import React from "react";
import { Container } from "reactstrap";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="container-fluid px-0 min-100vh d-flex flex-column">
      <Header />
      <div className="flex-grow-1 d-flex flex-column">
        <Container className="my-4">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
