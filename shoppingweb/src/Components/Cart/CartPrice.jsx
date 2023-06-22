import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { cartTotal } from "../../utils/cartTotal";
import { CurrenctContext } from "../../Context/CurrencyContext";
const CartPrice = ({ cartItems }) => {
  const { formatCurrency } = useContext(CurrenctContext);
  return (
    <React.Fragment>
      <div className="cart-price card">
        <div className="card-body">
          <h4 className="text-center my-3 pb-4 border-bottom fw-semibold">
            Price Details
          </h4>
          <Row className="gy-4 fw-medium fs-18 pb-4">
            <Col lg={6}>Price</Col>
            <Col lg={6} className="text-end">
              <h5>{formatCurrency(cartTotal(cartItems))}</h5>
            </Col>
            <Col lg={6}>Delivery Charges</Col>
            <Col lg={6} className="text-end">
              100
            </Col>
            <Col lg={6}>Discount</Col>
            <Col lg={6} className="text-end">
              1000
            </Col>
          </Row>
          <div className="d-flex justify-content-between border-top pt-4">
            <div>
              <h5>Total Amount</h5>
            </div>
            <div>
              <h5 className="text-success">5000</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPrice;
