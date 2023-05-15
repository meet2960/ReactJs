import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Skeleton } from "antd";
import { currencyFormat } from "../../utils/currencyFormat";

const ProductCard = ({ items }) => {
  const [loading, setLoading] = useState(true);
  const ratings = Math.round(items.rating);
  const totalRating = 5;
  return (
    <React.Fragment>
      <Card className="h-100 card-animate rounded-0">
        <NavLink to={`/productdetails/${items.id}`} className="nav-link">
          <div className="product-img d-flex justify-content-center align-items-center">
            {loading && (
              <Skeleton.Image active={true} className="w-100 skeleton" />
            )}
            <img
              src={items?.thumbnail}
              alt={items.title}
              className={`img-fluid hov ${loading ? "d-none" : "d-block"}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </NavLink>
        <CardBody>
          <div className="d-flex justify-content-between align-items-center fs-14">
            <div>{items.category.toUpperCase()}</div>
            <div>
              <span>
                {[...Array(totalRating)].map((items, index) => (
                  <React.Fragment key={index}>
                    <i
                      className={`bi bi-star-fill me-1 ${
                        index < ratings ? "text-warning" : ""
                      }`}
                    ></i>
                  </React.Fragment>
                ))}
              </span>
            </div>
          </div>
          <h5 className="fw-medium my-3">{items.title.toUpperCase()}</h5>
          <div>
            <span className="me-3 text-decoration-line-through text-success">
              {currencyFormat(items.price)}
            </span>
            <span>{currencyFormat(items.price - 30)}</span>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm mt-3 btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffCanvas"
              aria-controls="offcanvasRight"
            >
              ADD TO CART
            </button>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;