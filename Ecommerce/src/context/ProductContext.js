// * Product Context of Product File
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const baseURL = "https://dummyjson.com/products?limit=200";
  const fetchApi = async () => {
    try {
      const response = await axios.get(baseURL);
      setProduct(response.data.products);
      sessionStorage.setItem(
        "products",
        JSON.stringify(response.data.products)
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = sessionStorage.getItem("products");
    let parseData;
    if (!product && !getData) {
      fetchApi();
    } else {
      if (getData) {
        parseData = JSON.parse(getData);
        setProduct(parseData);
      }
    }
  }, []);
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };
