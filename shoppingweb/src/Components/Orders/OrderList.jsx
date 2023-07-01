import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";

const OrderList = () => {
  const ordersList = useSelector((state) => state.order.orderItems);
  const formatDate = (orderDate) => {
    const dateObject = new Date(Date.parse(orderDate));
    return dateObject.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "2-digit",
    });
  };
  return (
    <div>
      <Row className="mt-4 justify-content-between px-3 text-center">
        <Col>
          <h6>Order #</h6>
        </Col>
        <Col>
          <h6>Status</h6>
        </Col>
        <Col>
          <h6>Date Purchased</h6>
        </Col>
        <Col>
          <h6>Total</h6>
        </Col>
        <Col xs={"auto"}>
          <h6>More Details</h6>
        </Col>
      </Row>
      {ordersList &&
        ordersList.length !== 0 &&
        ordersList.map((items, index) => {
          return (
            <React.Fragment key={items.orderId}>
              <div className="card">
                <div className="card-body">
                  <NavLink to={`${items.orderId}`}>
                    <Row className="justify-content-between align-items-center text-center">
                      <Col>
                        <p className="mb-0">{items.orderId.slice(0, 8)}</p>
                      </Col>
                      <Col>
                        <p className="mb-0 text-capitalize">
                          {items.orderStatus}
                        </p>
                      </Col>
                      <Col>{formatDate(items.orderDate)}</Col>
                      <Col>{items.totalAmount}</Col>
                      <Col xs={"auto"}>
                        <div className="avatar-xs bg-dark rounded-circle d-flex justify-content-center">
                          <i className="bi bi-arrow-right-short text-white fs-25"></i>
                        </div>
                      </Col>
                    </Row>
                  </NavLink>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default OrderList;
