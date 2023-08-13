import React from "react";
import { baseImgUrl } from "../../api/axios";
import { NavLink } from "react-router-dom";
const SmallCard = ({ items, index }) => {
  return (
    <React.Fragment>
      <NavLink to={`details/${items.id}`}>
        <div className="cursor-pointer px-3">
          <div className="small-card">
            <img
              src={`${baseImgUrl}${items?.backdrop_path}`}
              alt=""
              className="poster"
            />
          </div>
          <h3 className="text-base mt-3">{items?.title}</h3>
        </div>
      </NavLink>
    </React.Fragment>
  );
};

export default SmallCard;
