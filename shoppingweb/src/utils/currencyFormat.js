const currenctFormat = "INR";
/* export function changeCurrencyFormat(curr) {
  currenctFormat = curr;
} */
export const currencyFormat = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currenctFormat,
    minimumFractionDigits: 0,
    // currencyDisplay: "name",
  }).format(value);
};
