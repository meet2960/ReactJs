import React, { useContext, useMemo } from "react";
import { Col, Row } from "reactstrap";
import { cartTotal } from "../../utils/cartTotal";
import { CurrenctContext } from "../../Context/CurrencyContext";
const CartPrice = ({ cartItems }) => {
  const { formatCurrency } = useContext(CurrenctContext);
  const subTotal = useMemo(() => {
    return cartTotal(cartItems);
  }, [cartItems]);
  const deliveryCharges = cartItems && cartItems.length !== 0 ? 150 : 0;
  const finalAmount = subTotal + deliveryCharges;
  return (
    <React.Fragment>
      <div className="cart-price card">
        <div className="card-body">
          <h4 className="text-center my-3 pb-4 border-bottom fw-semibold">
            Price Details
          </h4>
          <Row className="gy-4 fw-medium fs-18 pb-4">
            <Col xs={6}>Price</Col>
            <Col xs={6} className="text-end">
              <h5>{formatCurrency(cartTotal(cartItems))}</h5>
            </Col>
            <Col xs={6}>Delivery Charges</Col>
            <Col xs={6} className="text-end">
              {formatCurrency(deliveryCharges)}
            </Col>
            <Col xs={6}>Discount</Col>
            <Col xs={6} className="text-end">
              1000
            </Col>
          </Row>
          <div className="d-flex justify-content-between border-top pt-4">
            <div>
              <h5>Total Amount</h5>
            </div>
            <div>
              <h5>{formatCurrency(finalAmount)}</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPrice;
