import React, { useMemo } from "react";
import { Col, Container, Row } from "reactstrap";
import CartDetails from "../../Components/Cart/CartDetails";
import CartPrice from "../../Components/Cart/CartPrice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTotal } from "../../utils/cartTotal";

const Cart = () => {
  document.title = "My Cart | Ecommerce";
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const subTotal = cartTotal(cartItems); // Total of Cart
  const deliveryCharges = subTotal > 1500 ? 150 : 0; // Delivery charges
  const discountAmount =
    cartItems && cartItems.length !== 0 && subTotal > 3000 ? 1000 : 0; // DIscount to be given
  const finalCartAmount = useMemo(() => {
    let total = subTotal + deliveryCharges - discountAmount; // Final Amount after discount and delivery
    sessionStorage.setItem("finalTotal", JSON.stringify(total));
    return total;
  }, [subTotal, deliveryCharges, discountAmount]);
  console.log("Final Amount", finalCartAmount);
  const handleCheckout = (e) => {
    navigate("/checkout");
  };
  return (
    <React.Fragment>
      <section className="my-4 cart-section">
        <Container>
          <Row className="gy-4 gy-lg-0">
            <Col lg={8} xl={8}>
              <div className="cart-content card">
                <div className="card-body">
                  <CartDetails cartItems={cartItems} />
                  <div className="d-flex justify-content-end mt-4 mt-lg-0">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => handleCheckout(e)}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} xl={4}>
              <div className="cart-price card">
                <div className="card-body">
                  <CartPrice
                    cartItems={cartItems}
                    discountAmount={discountAmount}
                    deliveryCharges={deliveryCharges}
                    finalCartAmount={finalCartAmount}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cart;
