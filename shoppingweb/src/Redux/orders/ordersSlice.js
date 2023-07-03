import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  orderItems: [
    {
      orderId: "d7076b8e-375a-4c38-8066-9cf707ed62a2",
      orderDate: "7/3/2023, 5:54:08 PM",
      address: {
        name: "Meet",
        phone: "1234567890",
        postalcode: "382350",
        locality: "NIkol",
        address: "swagat Society, Nikol Gam road, nikol",
        state: "Gujarat",
        city: "Ahmedabad",
      },
      cart: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          quantity: 5,
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          ],
        },
        {
          id: 2,
          title: "iPhone X",
          description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          price: 899,
          discountPercentage: 17.94,
          rating: 4.44,
          stock: 34,
          brand: "Apple",
          category: "smartphones",
          quantity: 4,
          thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          ],
        },
      ],
      totalQuantity: 9,
      totalItems: 2,
      subTotal: 6341,
      deliveryAmount: 150,
      discountAmount: 1000,
      totalAmount: 5491,
    },
  ],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addToOrders: (state, action) => {
      let orderId = uuid();
      let orderDate = new Date().toLocaleString();
      let orderObject = {
        orderId: orderId,
        orderDate: orderDate,
        ...action.payload,
      };
      console.log("State Order Object", orderObject);
      state.orderItems.push(orderObject);
    },
  },
});
export const { addToOrders, addPriceToOrders } = orderSlice.actions;
