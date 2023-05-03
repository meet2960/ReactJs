import React from "react";
import { Container } from "reactstrap";
import Note from "../Components/Note";
const Home = () => {
  return (
    <Container className="flex-grow-1">
      <Note />
    </Container>
  );
};

export default Home;
