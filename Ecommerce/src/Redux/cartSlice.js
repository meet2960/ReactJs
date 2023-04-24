// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialStateValues = {
  cart: [],
  isLoggedIn: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValues,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        let addeditem = state.cart[itemIndex];
        state.cart[itemIndex] = {
          ...addeditem,
          quantity: addeditem.quantity + 1,
        };
      }
    },
    increaseQuantity: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      selectedItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (selectedItem.quantity >= 0) {
        selectedItem.quantity--;
      }
      // * Some More logic
      /* if (selectedItem.quantity > 1) {
        selectedItem.quantity--;
      } else {
        selectedItem.quantity = 1;
      } */
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    loggedIn: (state, action) => {
      // state.isLoggedIn = !state.isLoggedIn;
      state.isLoggedIn = true;
    },
    loggedOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  loggedIn,
  loggedOut,
} = cartSlice.actions;
