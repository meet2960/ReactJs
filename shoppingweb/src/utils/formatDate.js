export const formatDate = (orderDate) => {
  const dateObject = new Date(Date.parse(orderDate));
  return dateObject.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
