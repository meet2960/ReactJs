import React, { createContext, useState } from "react";

export const CurrenctContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const exchangeEURRate = 0.91;
  const exchangeINRRate = 82;
  const [currency, setCurrency] = useState("INR");
  const handleCurrencyFormatChange = (value) => {
    setCurrency(value);
    console.log("Currency ", currency);
  };

  /*   const formatCurrency = (value) => {
    if (currency === "USD") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
      }).format(value);
    } else if (currency === "EUR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
      }).format(value * exchangeEuroRate);
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
      }).format(value * exchangeINRRate);
    }
  }; */
  const formatCurrency = (value) => {
    let convertedCurrency = value;
    if (currency === "INR") {
      convertedCurrency = value * exchangeINRRate;
    } else if (currency === "EUR") {
      convertedCurrency = value * exchangeEURRate;
    } else {
      convertedCurrency = value;
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(convertedCurrency);
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
