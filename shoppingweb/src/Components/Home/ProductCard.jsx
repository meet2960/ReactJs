import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Skeleton } from "antd";

const ProductCard = ({ items }) => {
  const [loading, setLoading] = useState(true);
  return (
    <React.Fragment>
      <Card className="h-100 card-animate">
        <NavLink to="/login" className="nav-link">
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
          <CardBody>
            <CardTitle>{items.title}</CardTitle>
          </CardBody>
        </NavLink>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;