import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allProducts: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    productList: (state, action) => {
      state.products = action.payload;
    },
  },
});
