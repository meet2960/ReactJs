import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      quantity: 1,
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  ],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addToOrders: (state, action) => {
      console.log("Inside Add to Order State", action.payload);
    },
  },
});
export const { addToOrders } = orderSlice.actions;
