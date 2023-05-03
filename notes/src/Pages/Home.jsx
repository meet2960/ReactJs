import React from "react";
import { Container } from "reactstrap";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="min-100vh d-flex flex-column back-bg">
      <Header />
      <div className="flex-grow-1">
        <Container className="my-4">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
