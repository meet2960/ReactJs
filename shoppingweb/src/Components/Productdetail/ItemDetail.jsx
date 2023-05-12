import React from "react";
import { currencyFormat } from "../../utils/currencyFormat";

const ItemDetail = ({ selectedProduct }) => {
  return (
    <div>
      <h3>{selectedProduct.title}</h3>
      <p className="fw-14 mb-0">
        <span className="p-1 rounded-3 text-white bg-success me-2 d-inline-block">
          {Math.floor(selectedProduct.rating)}
          <i className="fa-solid fa-star"></i>
        </span>
        <span>30,856 Ratings & 3,851 Reviews</span>
      </p>
      <p className="text-success fw-16 fw-semibold mb-2">Extra 15000 Off</p>
      <h3 className="my-3">{currencyFormat(selectedProduct.price)}</h3>
      <div>
        <h6 className="text-decoration-underline">Avaliable Offers</h6>
        <ul className="list-unstyled fs-14">
          <li>
            <p className="justify-paragraph">
              <i class="bi bi-tag-fill me-2"></i>
              <span className="fw-semibold">Bank Offer</span> 10% off on ICICI
              Bank Credit Card Transactions, up to ₹750, on orders of ₹5,000 and
              above
            </p>
          </li>
          <li>
            <p className="justify-paragraph">
              <i class="bi bi-tag-fill me-2"></i>
              <span className="fw-semibold">Bank Offer</span> 10% off on SBI
              Bank Credit Card Transactions, up to ₹750, on orders of ₹5,000 and
              above
            </p>
          </li>
          <li>
            <p className="justify-paragraph">
              <i class="bi bi-tag-fill me-2"></i>
              <span className="fw-semibold">Bank Offer</span> 10% off on SBI
              Bank Credit Card Transactions, up to ₹750, on orders of ₹5,000 and
              above
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-0">Description</h4>
        <span className="fw-14">{selectedProduct.category}</span>
        <p>{selectedProduct.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;