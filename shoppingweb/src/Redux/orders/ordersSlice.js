import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  orderItems: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addPriceToOrders: (state, action) => {
      state.orderItems.push(action.payload);
      console.log("Insde Price", action.payload);
    },
    addToOrders: (state, action) => {
      console.log("Inside Add to Order State", action.payload);
      let orderId = uuid();
      let orderDate = new Date().toLocaleString();
      let orderObject = {
        ...state.orderItems[state.orderItems.length - 1],
        orderId: orderId,
        orderDate: orderDate,
        ...action.payload,
      };
      console.log("Order Object", orderObject);
      state.orderItems[state.orderItems.length - 1] = orderObject;
      // state.orderItems.push(orderObject);
    },
  },
});
export const { addToOrders, addPriceToOrders } = orderSlice.actions;
