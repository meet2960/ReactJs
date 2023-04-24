import React from "react";
import { ProductProvider } from "../context/ProductContext";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Routing from "./Routing";
const Layout = () => {
  return (
    <Provider store={store}>
      <ProductProvider>
        <Routing />
      </ProductProvider>
    </Provider>
  );
};

export default Layout;
