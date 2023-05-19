export const currencyFormat = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
};
