import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./Routing/AppRoutes";
import { CurrencyProvider } from "./Context/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CurrencyProvider>
          <AppRoutes />
        </CurrencyProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
