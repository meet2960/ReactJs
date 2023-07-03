import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
const OrderDetails = () => {
  const orderList = useSelector((state) => state.order.orderItems);
  const { id } = useParams();
  console.log("Selected Order ID", id);
  const selectedOrder = orderList.filter((items, index) => {
    return items.orderId === id;
  });
  console.log("Selected Order", selectedOrder);
  return (
    <div className="fs-16">
      <div className="card">
        <div className="card-body">
          <Row className="">
            <Col xs={2}>
              <div>
                <img
                  src={selectedOrder[0].cart[0].thumbnail}
                  alt="orderImg"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col>
              <div>
                <p className="mb-0">{selectedOrder[0].cart[0].title}</p>
                <p className="mb-0">
                  <span>{selectedOrder[0].cart[0].price}</span>
                  <span className="mx-2">x</span>
                  <span>{selectedOrder[0].cart[0].quantity}</span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="mt-4">
        <Col lg={6}>
          <div className="card">
            <div className="card-body">
              <h5>Shipping Address</h5>
              <div>
                <p>{selectedOrder[0].address.address}</p>
                <div className="d-flex">
                  <div>{selectedOrder[0].address.state}</div>
                  <div>{selectedOrder[0].address.city}</div>
                  <div>{selectedOrder[0].address.postalcode}</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="card">
            <div className="card-body">
              <div>
                <h5>Total Summary</h5>
                <Row className="gy-3">
                  <Col xs={6}>
                    <span>Sub Total</span>
                  </Col>
                  <Col xs={6} className="text-end">
                    <span>{selectedOrder[0].subTotal}</span>
                  </Col>
                  <Col xs={6}>
                    <span>Shipping Cost</span>
                  </Col>
                  <Col xs={6} className="text-end">
                    <span>{selectedOrder[0].deliveryAmount}</span>
                  </Col>
                  <Col xs={6}>
                    <span>Discount</span>
                  </Col>
                  <Col xs={6} className="text-end">
                    <span>{selectedOrder[0].discountAmount}</span>
                  </Col>
                </Row>
                <div className="d-flex justify-content-between border-top mt-3 pt-3">
                  <div>
                    <h6 className="fs-18 fw-semibold">Total</h6>
                  </div>
                  <div>
                    <h6 className="fs-18 fw-semibold">
                      {selectedOrder[0].totalAmount}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
