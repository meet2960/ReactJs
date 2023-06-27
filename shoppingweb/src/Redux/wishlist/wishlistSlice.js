import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishListItems: [],
};
export const wishListSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addToWishList: (state, action) => {
      console.log("Inside Slice", action.payload);
      const itemIndex = state.wishListItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex < 0) {
        // console.log("Added to Wishlist");
        state.wishListItems.push({
          ...action.payload,
        });
      } else {
        // console.log("Already Added to Wishlist");
        return;
      }
    },
  },
});
export const { addToWishList } = wishListSlice.actions;
