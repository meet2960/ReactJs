import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { formatDate } from "../../utils/formatDate";
const OrderList = () => {
  const { formatCurrency } = useContext(CurrenctContext);
  const ordersList = useSelector((state) => state.order.orderItems);

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
                {ordersList && ordersList.length !== 0 ? (
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
                          <span className="text-capitalize badge bg-secondary text-white">
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
                              <div className="avatar-xs bg-secondary rounded-circle d-flex justify-content-center align-items-center">
                                <i className="bi bi-arrow-right-short text-white fs-25"></i>
                              </div>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="my-5">
                    <td colSpan={6}>
                      <h3 className="text-center my-5">No Orders Found</h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderList;
