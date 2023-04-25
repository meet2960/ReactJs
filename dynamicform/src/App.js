import React from "react";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
