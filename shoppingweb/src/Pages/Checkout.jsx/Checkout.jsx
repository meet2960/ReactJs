import React from "react";
import CheckoutForm from "../../Components/Checkout/CheckoutForm";
import CommonHeading from "../../Components/Common/CommonHeading";
import { Container } from "reactstrap";

const Checkout = () => {
  document.title = "Checkout | Ecommerce";
  return (
    <section className="my-4 checkout-section">
      <Container>
        <CommonHeading heading={"Address Information"} />
        <CheckoutForm />
      </Container>
    </section>
  );
};

export default Checkout;
