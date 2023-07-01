import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import CommonHeading from "../../Components/Common/CommonHeading";
const Orders = () => {
  document.title = "My Orders | Ecommerce";
  return (
    <section className="my-4 orders">
      <Container>
        <CommonHeading heading={"My Orders"} />
        <Outlet />
      </Container>
    </section>
  );
};
export default Orders;
