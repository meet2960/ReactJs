import React from "react";
import { Card, CardBody } from "reactstrap";

const MovieCard = ({ items, index }) => {
  return (
    <Card className="secondary-bg secondary-text w-100 cursor-pointer">
      <div className="home-img">
        <img src={items.Poster} alt={items.Title} className="img-fluid" />
      </div>

      <CardBody>
        <h5>{items.Title}</h5>
        <p className="mb-0">{items.Year}</p>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
