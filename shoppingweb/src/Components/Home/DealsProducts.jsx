import React from "react";
import { Container } from "reactstrap";
import DisplayProductSlider from "../Common/DisplayProductSlider";
import CommonHeading from "../Common/CommonHeading";

const DealsProducts = () => {
  return (
    <section className="mb-5">
      <Container>
        <CommonHeading heading={"Deal of the Day"} />
        <DisplayProductSlider />
      </Container>
    </section>
  );
};

export default DealsProducts;
