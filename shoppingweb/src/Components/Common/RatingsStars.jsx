import React from "react";

const RatingsStars = ({ getRatings, size }) => {
  const ratings = Math.round(getRatings);
  const totalRating = 5;
  return (
    <React.Fragment>
      <span>
        {[...Array(totalRating)].map((items, index) => (
          <React.Fragment key={index}>
            <i
              className={`bi bi-star-fill me-1 ${
                index < ratings ? "text-warning" : ""
              } ${size}`}
            ></i>
          </React.Fragment>
        ))}
      </span>
    </React.Fragment>
  );
};

export default RatingsStars;
