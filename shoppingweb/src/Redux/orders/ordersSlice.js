import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  orderItems: [
    {
      orderId: "489515c6-9a38-402b-9002-a0c8a91f4bd7",
      orderDate: "7/3/2023, 10:01:39 PM",
      address: {
        name: "Meet Ghelani",
        phone: "9725582557",
        postalcode: "382350",
        locality: "Nikol",
        address: "41, Swagat society, nikol gam road, nikol",
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
      orderStatus: "pending",
      subTotal: 6341,
      deliveryAmount: 150,
      discountAmount: 1000,
      totalAmount: 5491,
    },
    {
      orderId: "234518c6-9a38-402b-9002-a0c8a91f4bd7",
      orderDate: "7/1/2023, 10:01:39 PM",
      address: {
        name: "Raj Alagiya",
        phone: "7490817357",
        postalcode: "382345",
        locality: "Opp. Torrent Power Station",
        address: "73/A, Shreenath Park Society, Uttamnagar",
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
      totalQuantity: 4,
      totalItems: 2,
      orderStatus: "delivered",
      subTotal: 10511,
      deliveryAmount: 150,
      discountAmount: 1000,
      totalAmount: 9545,
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
