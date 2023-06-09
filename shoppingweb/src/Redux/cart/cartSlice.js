import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
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
      console.log("Delete Button Clicked", action.payload);
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
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
    deleteCart: (state, action) => {
      state.cartItems = [];
    },
  },
});
export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  deleteCart,
} = cartSlice.actions;
