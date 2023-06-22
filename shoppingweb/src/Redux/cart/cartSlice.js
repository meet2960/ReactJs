import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          /*   size: "L",
          color: "red", */
        });
      } else {
        let addeditem = state.cartItems[itemIndex];
        state.cartItems[itemIndex] = {
          ...addeditem,
          quantity: addeditem.quantity + 1,
        };
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = removeItem;
    },
    increaseQuantity: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      selectedItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (selectedItem.quantity > 1) {
        selectedItem.quantity--;
      }
      // * Some More logic
      /* if (selectedItem.quantity > 1) {
        selectedItem.quantity--;
      } else {
        selectedItem.quantity = 1;
      } */
    },
  },
});
export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
