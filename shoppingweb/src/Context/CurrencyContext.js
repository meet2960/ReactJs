import React, { createContext, useState } from "react";

export const CurrenctContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const handleCurrencyFormatChange = (value) => {
    setCurrency(value);
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(value);
  };
  const contextValue = {
    currency,
    handleCurrencyFormatChange,
    formatCurrency,
  };
  return (
    <CurrenctContext.Provider value={contextValue}>
      {children}
    </CurrenctContext.Provider>
  );
};
