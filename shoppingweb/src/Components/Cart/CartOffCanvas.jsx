import React from "react";
import { currencyFormat } from "../../utils/currencyFormat";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { removeItem } from "../../Redux/cart/cartSlice";
import { cartTotal } from "../../utils/cartTotal";
import { NavLink } from "react-router-dom";

const CartOffCanvas = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <div
        className="offcanvas offcanvas-end cart-canvas"
        tabIndex="-1"
        id="cartOffCanvas"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header shadow-sm">
          <h4 className="offcanvas-title fw-semibold" id="offcanvasRightLabel">
            <i className="bi bi-cart-fill"></i> Shopping Cart
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Row className={`gy-3 gx-0 ${cart.length === 0 ? "h-100" : ""}`}>
            {cart && cart.length !== 0 ? (
              cart.map((items, index) => (
                <Col lg={12} key={index} className="c-borderbottom pb-3">
                  <Row className="justify-content-between align-items-center">
                    <Col xs={"auto"} className="d-flex justify-content-center">
                      <img
                        src={items.images[0]}
                        className="avatar-sm obj-contain"
                        alt="cart-img"
                      />
                    </Col>
                    <Col>
                      <Row className="justify-content-between align-items-center">
                        <Col xs={"5"}>
                          <h6 className="mb-0 fw-semibold">{items.title}</h6>
                        </Col>
                        <Col xs={"auto"}>
                          {/* <button
                            className="btn btn-sm btn-dark"
                            type="button"
                            onClick={() => dispatch(increaseQuantity(items))}
                          >
                            +
                          </button> */}
                          <span className="d-inline-block fs-15 mx-2">
                            Quantity : {items.quantity}
                          </span>
                          {/* <button
                            className="btn btn-sm btn-dark"
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(items))}
                            disabled={items.quantity > 1 ? "" : "Disabled "}
                          >
                            -
                          </button> */}
                        </Col>
                        <Col xs={"3"} className="text-end">
                          <h6 className="fw-semibold">
                            {currencyFormat(items.price)}
                          </h6>
                          <div>
                            <span
                              className="cursor-pointer fs-14 text-danger"
                              onClick={() => {
                                dispatch(removeItem(items));
                              }}
                            >
                              Remove
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <h3 className="text-center">
                  Please Add Product to Cart...!!!
                </h3>
              </div>
            )}
          </Row>
        </div>
        {cart.length >= 1 ? (
          <div className="offcanvas-header shadow-lg">
            <h5 className="mb-0">
              Cart Total: {currencyFormat(cartTotal(cart))}
            </h5>
            <div>
              <NavLink to="/checkout">
                <button type="button" className="btn btn-sm btn-dark">
                  Checkout
                </button>
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CartOffCanvas;
