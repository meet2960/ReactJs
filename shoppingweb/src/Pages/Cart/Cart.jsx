import React, { useMemo } from "react";
import { Col, Container, Row } from "reactstrap";
import CartDetails from "../../components/Cart/CartDetails";
import CartPrice from "../../components/Cart/CartPrice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartTotal } from "../../utils/cartTotal";
import CommonHeading from "../../components/Common/CommonHeading";

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
    let allAmountObj = {
      subTotal: subTotal,
      deliveryAmount: deliveryCharges,
      discountAmount: discountAmount,
      totalAmount: total,
    };
    sessionStorage.setItem("priceDetailsObj", JSON.stringify(allAmountObj));
    return total;
  }, [subTotal, deliveryCharges, discountAmount]);
  console.log("Amount Object", finalCartAmount);
  const handleCheckout = (e) => {
    navigate("/checkout");
  };
  return (
    <React.Fragment>
      <section className="my-4 cart-section">
        <Container>
          <CommonHeading heading={"My Cart"} />
          <Row className="gy-4 gy-lg-0">
            <Col lg={8} xl={8}>
              <div className="cart-content card">
                <div className="card-body">
                  <CartDetails cartItems={cartItems} />
                  {cartItems && cartItems.length !== 0 && (
                    <div className="d-flex justify-content-end mt-4 mt-lg-0">
                      <button
                        type="button"
                        className="btn btn-success me-4"
                        onClick={(e) => handleCheckout(e)}
                      >
                        Checkout
                      </button>
                    </div>
                  )}
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
