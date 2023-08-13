import React, { useContext, useEffect, useState } from "react";
import RatingsStars from "./RatingsStars";
import { CurrenctContext } from "../../context/CurrencyContext";
import { Skeleton } from "antd";

const CommonProductCard = ({ items }) => {
  const { formatCurrency } = useContext(CurrenctContext);
  const [imgLoading, setImgLoading] = useState(true); // For Image Loading
  useEffect(() => {
    return () => {
      setImgLoading(true);
    };
  }, [items]);
  return (
    <React.Fragment>
      <div className="fs-16 custom-productcard overflow-hidden text-center position-relative">
        <div className="custom-productcard-img d-flex justify-content-center">
          {imgLoading && (
            <Skeleton.Image active={true} className="card-skeleton" />
          )}
          <img
            src={items.thumbnail}
            alt={items.title}
            className={`${imgLoading ? "d-none" : "d-block"}`}
            onLoad={() => setImgLoading(false)}
          />
        </div>
        <div className="px-4 py-3">
          <div className="fs-12">{items.category.toUpperCase()}</div>
          <h5 className="mb-0 text-truncate">{items.title.toUpperCase()}</h5>
          <p className="mb-0">
            <RatingsStars getRatings={items.rating} size={"fs-12"} />
          </p>
          <div className="fw-semibold my-2">
            <span>{formatCurrency(items.price)}</span>
          </div>
        </div>
        <div className="position-absolute sale">
          <span className="badge bg-dark">Sale</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommonProductCard;