export const currencyFormat = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    // currencyDisplay: "name",
  }).format(value);
};
