import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { removeItem } from "../../Redux/cart/cartSlice";
import { cartTotal, quantitySubTotal } from "../../utils/cartTotal";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { NavLink } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const CartOffCanvas = () => {
  const { formatCurrency } = useContext(CurrenctContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <aside>
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
                      <NavLink to={`/productdetails/${items.id}`}>
                        <img
                          src={items.images[0]}
                          className="avatar-md object-fit-cover"
                          alt="cart-img"
                        />
                      </NavLink>
                    </Col>
                    <Col>
                      <Row className="justify-content-between align-items-center">
                        <Col xs={4}>
                          <h6 className="mb-0 fw-semibold">{items.title}</h6>
                        </Col>
                        <Col xs={4} className="text-center fs-14 fw-semibold">
                          <p className="mb-0">
                            {items.quantity}* {formatCurrency(items.price)}
                          </p>
                        </Col>
                        <Col
                          xs={4}
                          className="d-flex align-items-center justify-content-end"
                        >
                          <h6 className="fw-semibold mb-0">
                            {formatCurrency(quantitySubTotal(items))}
                          </h6>
                          <button
                            className="btn btn-link text-secondary p-1"
                            onClick={() => {
                              dispatch(removeItem(items));
                            }}
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <MdDeleteForever className="fs-20" />
                            </div>
                          </button>
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
              Cart Total: {formatCurrency(cartTotal(cart))}
            </h5>
            <div>
              <NavLink to="/cart">
                <button type="button" className="btn btn-success">
                  Checkout
                </button>
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
};

export default CartOffCanvas;