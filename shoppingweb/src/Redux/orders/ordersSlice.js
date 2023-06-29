import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  orderItems: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addToOrders: (state, action) => {
      console.log("Inside Add to Order State", action.payload);
      let orderId = uuid();
      let orderDate = new Date().toLocaleString();
      let orderObject = {
        orderId: orderId,
        orderDate: orderDate,
        ...action.payload,
      };
      state.orderItems.push(orderObject);
    },
  },
});
export const { addToOrders } = orderSlice.actions;
