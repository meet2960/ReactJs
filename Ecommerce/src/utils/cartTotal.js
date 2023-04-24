export function cartTotal(cart) {
  const cartSubtotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return cartSubtotal;
}
