import React from "react";
import { Col, Container, Row } from "reactstrap";
import CartDetails from "../../Components/Cart/CartDetails";
import CartPrice from "../../Components/Cart/CartPrice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("CartItems are : ", cartItems);
  return (
    <React.Fragment>
      <section className="my-4 cart-section">
        <Container>
          <Row>
            <Col lg={8} xl={9}>
              <CartDetails cartItems={cartItems} />
            </Col>
            <Col lg={4} xl={3}>
              <CartPrice cartItems={cartItems} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cart;
