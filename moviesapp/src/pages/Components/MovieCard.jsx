import React from "react";
import { Card, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";
const MovieCard = ({ items, index }) => {
  return (
    <Card className="secondary-bg secondary-text w-100 animate-card ">
      <NavLink
        to={`/showmovie/${items.imdbID}`}
        className="text-decoration-none secondary-text"
      >
        <div className="home-img">
          <img src={items.Poster} alt={items.Title} className="img-fluid" />
        </div>
        <CardBody>
          <h5>{items.Title}</h5>
          <p className="mb-0">{items.Year}</p>
        </CardBody>
      </NavLink>
    </Card>
  );
};

export default MovieCard;
