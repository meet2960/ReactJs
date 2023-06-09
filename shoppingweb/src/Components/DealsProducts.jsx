import React from "react";
import { Container } from "reactstrap";
import DisplayProductSlider from "./Common/DisplayProductSlider";

const DealsProducts = () => {
  return (
    <section className="mb-5">
      <Container>
        <div className="heading-title mb-3">
          <h3 className="mb-0">Deal of The Day</h3>
        </div>
        <p className="text-center mb-4">
          Currently you are looking at the latest deals of the day
        </p>
        <DisplayProductSlider />
      </Container>
    </section>
  );
};

export default DealsProducts;
