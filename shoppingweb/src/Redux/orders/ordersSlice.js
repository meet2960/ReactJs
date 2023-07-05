import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  orderItems: [
    {
      orderId: "b98e6121-93f3-4ea8-b872-6b36de07f245",
      orderDate: "7/4/2023, 9:51:08 PM",
      address: {
        name: "Meet Ghelani",
        phone: "9426938352",
        postalcode: "382350",
        locality: "Nikol",
        address: "41, Swagat Society, Behind Union Bank, Nikol Road, Nikol",
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
      orderId: "41e582f7-2763-4ceb-a0ae-9f8fcc728621",
      orderDate: "7/4/2023, 9:55:15 PM",
      address: {
        name: "Raj",
        phone: "7491878513",
        postalcode: "382345",
        locality: "Near Torrent Power Statiobn",
        address:
          "71/A, Shreenath Society, Near Uttamnagar Main Road, Near Canal, Nikol",
        state: "Gujarat",
        city: "Ahmedabad",
      },
      cart: [
        {
          id: 11,
          title: "perfume Oil",
          description:
            "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
          price: 13,
          discountPercentage: 8.4,
          rating: 4.26,
          stock: 65,
          brand: "Impression of Acqua Di Gio",
          category: "fragrances",
          thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/11/1.jpg",
            "https://i.dummyjson.com/data/products/11/2.jpg",
            "https://i.dummyjson.com/data/products/11/3.jpg",
            "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
          ],
          quantity: 5,
        },
        {
          id: 10,
          title: "HP Pavilion 15-DK1056WM",
          description:
            "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
          price: 1099,
          discountPercentage: 6.18,
          rating: 4.43,
          stock: 89,
          brand: "HP Pavilion",
          category: "laptops",
          thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
          images: [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            "https://i.dummyjson.com/data/products/10/2.jpg",
            "https://i.dummyjson.com/data/products/10/3.jpg",
            "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
          ],
          quantity: 3,
        },
        {
          id: 14,
          title: "Non-Alcoholic Concentrated Perfume Oil",
          description:
            "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
          price: 120,
          discountPercentage: 15.6,
          rating: 4.21,
          stock: 114,
          brand: "Al Munakh",
          category: "fragrances",
          thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/14/1.jpg",
            "https://i.dummyjson.com/data/products/14/2.jpg",
            "https://i.dummyjson.com/data/products/14/3.jpg",
            "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
          ],
          quantity: 6,
        },
        {
          id: 16,
          title: "Hyaluronic Acid Serum",
          description:
            "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
          price: 19,
          discountPercentage: 13.31,
          rating: 4.83,
          stock: 110,
          brand: "L'Oreal Paris",
          category: "skincare",
          thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/16/1.png",
            "https://i.dummyjson.com/data/products/16/2.webp",
            "https://i.dummyjson.com/data/products/16/3.jpg",
            "https://i.dummyjson.com/data/products/16/4.jpg",
            "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
          ],
          quantity: 2,
        },
      ],
      totalQuantity: 16,
      totalItems: 4,
      orderStatus: "pending",
      subTotal: 4120,
      deliveryAmount: 150,
      discountAmount: 1000,
      totalAmount: 3270,
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
