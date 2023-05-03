import React from "react";
import { Container } from "reactstrap";
import Note from "../Components/NotesPage";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="min-100vh d-flex flex-column">
      <Header />
      <div className="flex-grow-1">
        <Container className="mt-3">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
