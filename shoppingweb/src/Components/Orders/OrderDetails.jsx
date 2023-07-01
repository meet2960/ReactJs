import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const orderList = useSelector((state) => state.order.orderItems);
  const { id } = useParams();
  console.log("Selected Order ID", id);
  const selectedOrder = orderList.filter((items, index) => {
    return items.orderId === id;
  });
  console.log("Selected Order", selectedOrder);
  return <div>order details will appear here</div>;
};

export default OrderDetails;
