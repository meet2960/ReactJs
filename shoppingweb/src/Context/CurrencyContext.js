import React, { createContext, useState } from "react";

export const CurrenctContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const exchangeEURRate = 0.91;
  const exchangeINRRate = 82;
  const [currency, setCurrency] = useState({
    value: "USD",
    label: "USD",
  });
  // const [currency, setCurrency] = useState("INR");
  const handleCurrencyFormatChange = (selectedOption) => {
    // setCurrency(selectedOption);
    setCurrency(selectedOption);
    // setCurrency((prev) => {});
    console.log("New Currency ", currency);
  };

  const formatCurrency = (value) => {
    if (currency.value === "USD") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency.value,
        minimumFractionDigits: 0,
      }).format(value);
    } else if (currency.value === "EUR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency.value,
        minimumFractionDigits: 0,
      }).format(value * exchangeEURRate);
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency.value,
        minimumFractionDigits: 0,
      }).format(value * exchangeINRRate);
    }
  };
  /*   const formatCurrency = (value) => {
    let convertedCurrency = value;
    if (currency.value === "INR") {
      convertedCurrency = value * exchangeINRRate;
    } else if (currency.value === "EUR") {
      convertedCurrency = value * exchangeEURRate;
    } else {
      convertedCurrency = value;
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency.value,
      minimumFractionDigits: 0,
    }).format(convertedCurrency);
  }; */
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
