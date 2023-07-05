import React from "react";
import "./assets/styles/customCommon.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRoutes from "./Routing/AppRoutes";
import { Container } from "reactstrap";
const App = () => {
  return (
    <Container fluid={true}>
      <AppRoutes />
    </Container>
  );
};

export default App;
