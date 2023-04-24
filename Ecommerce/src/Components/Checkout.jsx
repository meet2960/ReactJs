import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/cartSlice";
import { currencyFormat } from "../utils/formatCurrency";
import { cartTotal } from "../utils/cartTotal";
const NewCheckout = () => {
  document.title = "Ecommerce | Checkout";
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cartTotal(cart);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-3 justify-content-between">
          <div className="col-lg-8">
            {show ? (
              <AddressForm show={show} setShow={setShow} />
            ) : (
              <div className="rounded-3 bs p-5">
                <h4 className="text-center">
                  Purchase List{" "}
                  <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                </h4>
                {cart &&
                  cart.map((item, index) => (
                    <div className="row mt-4 align-items-center" key={index}>
                      <div className="col-lg-2">
                        <img
                          src={item.images[0]}
                          className="img-fluid"
                          alt="cart-img"
                        />
                      </div>
                      <div className="col-lg-10">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-lg-10">
                            <h6 className="mb-0">
                              <span className="p-0 me-1">{item.title}</span>
                              <span>{item.category.name}</span>
                            </h6>
                            <span className="text-muted">
                              Quantity : {item.quantity}
                            </span>
                          </div>
                          <div className="col-lg-2">
                            <h6>{currencyFormat(item.price)}</h6>
                            <button
                              onClick={() => dispatch(removeItem(item))}
                              className="btn btn-sm btn-outline-danger ms-2"
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {cart.length >= 1 ? (
                  <div className="d-flex justify-content-end mt-4">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShow(true)}
                    >
                      Place Order
                    </button>
                  </div>
                ) : null}
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="bs rounded-3 p-4">
              <h4 className="border-bottom py-3 mb-4">Price Details</h4>
              <div className="row g-4">
                <div className="col-lg-12 justify-content-between d-flex">
                  <p className="mb-0">Price</p>
                  <h6 className="text-end">{currencyFormat(total)}</h6>
                </div>
                <div className="col-lg-12 justify-content-between d-flex">
                  <p className="mb-0">Delivery Charges</p>
                  <h6 className="text-end text-success">Free</h6>
                </div>
                <div className="col-lg-12 justify-content-between d-flex brd">
                  <p className="">Discount</p>
                  <h6 className="text-success">
                    {currencyFormat(total > 3000 ? -2000 : 0)}
                  </h6>
                </div>
                <div className="col-lg-12 justify-content-between d-flex">
                  <h6 className="mb-0">Total Amount</h6>
                  <h6 className="mb-0 text-end">
                    {currencyFormat(total > 3000 ? total - 2000 : total)}
                  </h6>
                </div>
                <div className="col-lg-12">
                  {total > 3000 ? (
                    <p className="mb-0 text-success">
                      You will save <span>&#8377;</span> 2000 on this order
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCheckout;
