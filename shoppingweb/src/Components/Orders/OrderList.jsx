import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CurrenctContext } from "../../Context/CurrencyContext";
const OrderList = () => {
  const { formatCurrency } = useContext(CurrenctContext);
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
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive order-list">
            <table className="table align-middle text-center table-hover fs-16">
              <thead>
                <tr role="row">
                  <th>No.</th>
                  <th>Order #</th>
                  <th>Status</th>
                  <th>Date Purchased</th>
                  <th>Total</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody className="text-center fw-medium">
                {ordersList &&
                  ordersList.length !== 0 &&
                  ordersList.map((items, index) => {
                    return (
                      <tr role="row" key={index}>
                        <td>
                          <span>{index + 1}</span>
                        </td>
                        <td>
                          <span className="mb-0">
                            {items.orderId.slice(0, 8)}
                          </span>
                        </td>
                        <td>
                          <span className="text-capitalize badge bg-dark text-white">
                            {items.orderStatus}
                          </span>
                        </td>
                        <td>
                          <span>{formatDate(items.orderDate)}</span>
                        </td>
                        <td>
                          <span>{formatCurrency(items.totalAmount)}</span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <NavLink to={`${items.orderId}`}>
                              <div className="avatar-xs bg-dark rounded-circle">
                                <i className="bi bi-arrow-right-short text-white fs-25"></i>
                              </div>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderList;
