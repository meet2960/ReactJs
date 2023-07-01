import React from "react";
import { Container } from "reactstrap";
import DisplayProductSlider from "../Common/DisplayProductSlider";
import CommonHeading from "../Common/CommonHeading";

const DealsProducts = () => {
  return (
    <section className="mb-5">
      <Container>
        <CommonHeading heading={"Deal of the Day"} />
        <p className="text-center mb-4">
          Look at this amazing Currently Hot Deals on Products to Buy from with
          lowest Price Every...!!!
        </p>
        <DisplayProductSlider />
      </Container>
    </section>
  );
};

export default DealsProducts;
