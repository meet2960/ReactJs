import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

const Orders = () => {
  document.title = "My Orders | Ecommerce";
  const ordersList = useSelector((state) => state.order.orderItems);
  return (
    <section className="my-4 orders">
      <Container>
        <h2 className="text-center">
          My Orders <i class="bi bi-bag-check"></i>
        </h2>
        <h4>Total Orders : {ordersList && ordersList.length}</h4>
      </Container>
    </section>
  );
};

export default Orders;
