export function cartTotal(cart) {
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return cartSubtotal;
}

export function qunatityTotal(cartItems) {
  const totalQuantity = cartItems.reduce((quantity, items) => {
    return quantity + items.quantity;
  }, 0);
  return totalQuantity;
}

export function quantitySubTotal(selectedItem) {
  let quantity = selectedItem.quantity;
  let price = selectedItem.price;
  let finalAmount = quantity * price;
  return finalAmount;
}
