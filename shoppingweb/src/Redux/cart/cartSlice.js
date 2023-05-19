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
        state.cartItems.push({ ...action.payload, quantity: 1 });
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
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
    },
    // AMA MAIN CATCH E CHE, AKHU APP NU STATE EK J JAGIYA E CHE, E REDUX MA
    increaseQuantity: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      selectedItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const selectedItem = state.cartItems.find(
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
  },
});
export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;