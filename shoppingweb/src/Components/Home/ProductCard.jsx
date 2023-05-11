import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";

const ProductCard = ({ items }) => {
  return (
    <React.Fragment>
      <Card className="h-100 card-animate">
        <NavLink to="/login" className="nav-link">
          <div className="product-img d-flex justify-content-center align-items-center">
            <img
              src={items?.thumbnail}
              alt={items.title}
              className="img-fluid"
            />
          </div>
          <CardBody>
            <CardTitle>{items.title}</CardTitle>
          </CardBody>
        </NavLink>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;