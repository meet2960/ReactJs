import React from "react";

const CartOffCanvas = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffCanvas"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            <i className="bi bi-cart-fill"></i> Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
    </>
  );
};

export default CartOffCanvas;
