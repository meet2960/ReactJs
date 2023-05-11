import React from "react";
import { Container } from "reactstrap";

import ProductList from "../Components/Home/ProductList";

const Home = () => {
  document.title = "Home | Ecommerce";

  return (
    <React.Fragment>
      <Container fluid>
        <h1 className="text-center">Welcome to Ecommerce Web</h1>
        <ProductList />
      </Container>
    </React.Fragment>
  );
};

export default Home;