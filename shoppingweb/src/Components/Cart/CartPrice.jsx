import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { CurrenctContext } from "../../context/CurrencyContext";
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
      <div className="my-3 border-bottom">
        <h3 className="text-center">Price Details</h3>
        {/* <CommonHeading heading={"Price Details"} /> */}
      </div>
      <Row className="gy-3 fs-16 pb-4">
        <Col xs={6}>
          <span>Sub Total</span>
        </Col>
        <Col xs={6} className="text-end">
          <span className="fs-18">{formatCurrency(cartTotal(cartItems))}</span>
        </Col>
        <Col xs={6}>
          <span>Shipping Cost</span>
        </Col>
        <Col xs={6} className="text-end">
          <span className="fs-18">{formatCurrency(deliveryCharges)}</span>
        </Col>
        <Col xs={6}>
          <span>Discount</span>
        </Col>
        <Col xs={6} className="text-end">
          <span className="fs-18">{formatCurrency(discountAmount)}</span>
        </Col>
      </Row>
      <div className="d-flex justify-content-between border-top pt-4">
        <div>
          <h6 className="fs-18 fw-semibold">Total</h6>
        </div>
        <div>
          <h6 className="fs-18 fw-semibold">
            {formatCurrency(finalCartAmount)}
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPrice;