import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { quantitySubTotal } from "../../utils/cartTotal";
import { formatDate } from "../../utils/formatDate";
import { useContext } from "react";
const OrderDetails = () => {
  const { formatCurrency } = useContext(CurrenctContext);
  const orderList = useSelector((state) => state.order.orderItems);
  const { id } = useParams();
  console.log("Selected Order ID", id);
  const selectedOrder = orderList.find((items, index) => {
    return items.orderId === id;
  });
  console.log("Selected Order", selectedOrder);
  return (
    <React.Fragment>
      <div className="card fs-16">
        <div className="card-body">
          <h3 className="mb-3 text-center text-lg-start">Order Details</h3>
          <div className="d-flex mb-3">
            <div className="me-3">
              <span>Ordered on {formatDate(selectedOrder.orderDate)}</span>
            </div>
            <div>
              <span>Order# {selectedOrder.orderId}</span>
            </div>
          </div>
          <h5>Items List</h5>
          {selectedOrder &&
            selectedOrder.cart.length !== 0 &&
            selectedOrder.cart.map((items, index) => {
              return (
                <React.Fragment>
                  <Row className="align-items-center mb-3">
                    <Col xs={"auto"}>
                      <NavLink to={`/productdetails/${items.id}`}>
                        <div className="avatar-lg d-grid align-items-center">
                          <img
                            src={items.thumbnail}
                            alt="orderImg"
                            className="img-fluid"
                          />
                        </div>
                      </NavLink>
                    </Col>
                    <Col>
                      <div>
                        <span>{formatCurrency(items.price)}</span>
                        <span className="mx-2">x</span>
                        <span>{formatCurrency(items.quantity)}</span>
                        <p className="mb-0">
                          {formatCurrency(quantitySubTotal(items))}
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h6>{items.title}</h6>
                        <p className="mb-0"></p>
                        <span className="text-capitalize">
                          {items.category}
                        </span>
                      </div>
                    </Col>
                    <Col xs={"auto"}>
                      <button type="button" className="btn btn-sm btn-dark">
                        Track
                      </button>
                    </Col>
                    <Col xs={"auto"}>
                      <button type="button" className="btn btn-sm btn-danger">
                        Cancel
                      </button>
                    </Col>
                  </Row>
                </React.Fragment>
              );
            })}
        </div>
      </div>
      <Row className="mt-3 fs-16 gy-3 gy-lg-0">
        <Col lg={6}>
          <div className="card">
            <div className="card-body">
              <h5>Shipping Address</h5>
              <div>
                <p className="mb-0">{selectedOrder.address.name}</p>
                <p className="mb-0">{selectedOrder.address.address}</p>
                <p className="mb-0">{selectedOrder.address.locality}</p>
                <p>
                  <span>{selectedOrder.address.city}, </span>
                  <span>{selectedOrder.address.state} - </span>
                  <span>{selectedOrder.address.postalcode}</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="card">
            <div className="card-body">
              <h5>Total Summary</h5>
              <Row className="gy-3">
                <Col xs={6}>
                  <span>Sub Total</span>
                </Col>
                <Col xs={6} className="text-end">
                  <span>{formatCurrency(selectedOrder.subTotal)}</span>
                </Col>
                <Col xs={6}>
                  <span>Shipping Cost</span>
                </Col>
                <Col xs={6} className="text-end">
                  <span>{formatCurrency(selectedOrder.deliveryAmount)}</span>
                </Col>
                <Col xs={6}>
                  <span>Discount</span>
                </Col>
                <Col xs={6} className="text-end">
                  <span>{formatCurrency(selectedOrder.discountAmount)}</span>
                </Col>
              </Row>
              <div className="d-flex justify-content-between border-top mt-3 pt-3">
                <div>
                  <h6 className="fs-18 fw-semibold">Total</h6>
                </div>
                <div>
                  <h6 className="fs-18 fw-semibold">
                    {formatCurrency(selectedOrder.totalAmount)}
                  </h6>
                </div>
              </div>
              <div className="text-end mt-2">
                <span>Paid by Credit/Debit Card</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default OrderDetails;
