import React from "react";
import CheckoutForm from "../../Components/Checkout/CheckoutForm";

const Checkout = () => {
  document.title = "Checkout | Ecommerce";
  return (
    <section className="my-4 checkout-section">
      <CheckoutForm />
    </section>
  );
};

export default Checkout;
