import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { cartTotal } from "../../utils/cartTotal";
const CartPrice = ({
  cartItems,
  deliveryCharges,
  discountAmount,
  finalCartAmount,
}) => {
  const { formatCurrency } = useContext(CurrenctContext);

  return (
    <React.Fragment>
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
          {formatCurrency(discountAmount)}
        </Col>
      </Row>
      <div className="d-flex justify-content-between border-top pt-4">
        <div>
          <h5>Total Amount</h5>
        </div>
        <div>
          <h5>{formatCurrency(finalCartAmount)}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPrice;
