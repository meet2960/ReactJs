import React from "react";
import { Container } from "reactstrap";

import ProductList from "../Components/Home/ProductList";
import BackSlider from "../Components/Home/BackSlider";

const Home = () => {
  document.title = "Home | Ecommerce";

  return (
    <React.Fragment>
      <Container fluid={true} className="px-0">
        <div className="background-slider">
          <BackSlider />
        </div>
        <Container className="mt-3 home">
          <ProductList />
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Home;
