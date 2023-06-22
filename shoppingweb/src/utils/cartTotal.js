export function cartTotal(cart) {
  const cartSubtotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return cartSubtotal;
}
export function quantitySubTotal(selectedItem) {
  let quantity = selectedItem.quantity;
  let price = selectedItem.price;
  let finalAmount = quantity * price;
  return finalAmount;
}

