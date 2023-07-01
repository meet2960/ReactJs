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
      <h3 className="text-center my-3 pb-4 border-bottom ">Price Details</h3>
      <Row className="gy-4 fw-medium fs-18 pb-4">
        <Col xs={6}>Sub Total</Col>
        <Col xs={6} className="text-end">
          <h5 className="fw-semibold">
            {formatCurrency(cartTotal(cartItems))}
          </h5>
        </Col>
        <Col xs={6}>Shipping Cost</Col>
        <Col xs={6} className="text-end">
          <h5>{formatCurrency(deliveryCharges)}</h5>
        </Col>
        <Col xs={6}>Discount</Col>
        <Col xs={6} className="text-end">
          <h5>{formatCurrency(discountAmount)}</h5>
        </Col>
      </Row>
      <div className="d-flex justify-content-between border-top pt-4">
        <div>
          <h5>Total Cost</h5>
        </div>
        <div>
          <h5 className="fw-semibold">{formatCurrency(finalCartAmount)}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPrice;
