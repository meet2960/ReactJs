import React from "react";
import { NavLink } from "react-router-dom";
import { currencyFormat } from "../../utils/formatCurrency";
import { cartTotal } from "../../utils/cartTotal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../Redux/cartSlice";
const OffCanvas = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartOffCanvas"
      aria-labelledby="offcanvasRightLabel"
      data-bs-scroll="true"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className={`row ${cart.length === 0 ? "h-100" : ""}`}>
          {cart && cart.length >= 1 ? (
            cart.map((items, index) => (
              <div className="col-lg-12 mb-4" key={index}>
                <div className="row justify-content-between align-items-center">
                  <div className="col-3 col-lg-3">
                    <img
                      src={items.images[0]}
                      className="avatar-lg"
                      alt="cart-img"
                    />
                  </div>
                  <div className="col-9 col-lg-9">
                    <div className="row">
                      <div className="col-9 col-lg-8">
                        <h6>
                          <span className="d-block">{items.title}</span>
                          <span>{items.detail}</span>
                        </h6>
                        <div className="text-muted">
                          <span className="d-inline-block me-3">
                            Quantity : {items.quantity}
                          </span>
                          <button
                            className="btn btn-sm btn-success me-3"
                            type="button"
                            onClick={() => dispatch(increaseQuantity(items))}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(items))}
                            disabled={items.quantity > 1 ? "" : "Disabled "}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="col-3 col-lg-4 d-flex flex-column justify-content-between align-items-center">
                        <h6 className="mb-0">{currencyFormat(items.price)}</h6>
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(removeItem(items));
                          }}
                          className="btn btn-sm btn-outline-danger"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <h3 className="text-center">Please Add Product to Cart...!!!</h3>
            </div>
          )}
        </div>
      </div>
      {cart.length >= 1 ? (
        <div className="offcanvas-header bt">
          <h5 className="mb-0">
            Cart Total: {currencyFormat(cartTotal(cart))}
          </h5>
          <div>
            <NavLink to="/checkout">
              <button type="button" className="btn btn-secondary">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OffCanvas;
