import React from "react";
import { currencyFormat } from "../../utils/currencyFormat";

const ItemDetail = ({ selectedProduct }) => {
  const ratings = Math.round(selectedProduct.rating);
  const totalRating = 5;
  return (
    <div className="item-details">
      <h2 className="fw-semibold">
        {selectedProduct.title.charAt(0).toUpperCase() +
          selectedProduct.title.slice(1)}
      </h2>
      <p className="mb-0 fs-14">
        <span>
          {[...Array(totalRating)].map((items, index) => (
            <React.Fragment>
              <i
                className={`bi bi-star-fill me-1 ${
                  index < ratings ? "text-warning" : ""
                }`}
              ></i>
            </React.Fragment>
          ))}
        </span>
        <span>30,856 Ratings & 3,851 Reviews</span>
      </p>
      <p className="text-success fs-14 fw-medium mb-2">Extra 15000 Off</p>
      <h3 className="my-3 fw-semibold">
        {currencyFormat(selectedProduct.price)}
      </h3>
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
        <h4 className="mb-0 text-decoration-underline">Description</h4>
        <span className="fw-14">{selectedProduct.category}</span>
        <p>{selectedProduct.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
