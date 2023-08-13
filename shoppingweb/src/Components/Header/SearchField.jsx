import React, { useEffect, useState } from "react";
import { getRequest } from "../../store/common/crud";
import { Input } from "reactstrap";
import { NavLink } from "react-router-dom";

const SearchField = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setLoading(true);
    setsearchTerm(e.target.value);
  };
  const searchProducts = async (term) => {
    if (term.length > 1) {
      const response = await getRequest(
        `https://dummyjson.com/products/search?q=${term}`
      );
      console.log("Response", response.data.products);
      setLoading(false);
      setFilterProducts(response.data.products);
    }
  };
  useEffect(() => {
    const delay = 1000;
    const debounce = setTimeout(() => {
      // console.log("Hitting Search API");
      searchProducts(searchTerm);
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchTerm]);
  return (
    <React.Fragment>
      <div className="position-relative search">
        <Input
          type="text"
          className="form-control search-field position-relative"
          name="searchField"
          id="search"
          placeholder="Search Here"
          value={searchTerm}
          onChange={handleChange}
        />
        <i className="bi bi-search search-icon" />

        <div
          className={`${
            searchTerm ? "d-block " : "d-none"
          } search-items position-absolute w-100`}
        >
          <ul className="list-group">
            {loading ? (
              <li className="list-group-item">Loading......</li>
            ) : filterProducts && filterProducts.length >= 1 ? (
              filterProducts.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <NavLink
                      to={`/productdetails/${items.id}`}
                      onClick={() => setsearchTerm("")}
                    >
                      <li className="list-group-item" key={index}>
                        {items.title} - {items.price}
                      </li>
                    </NavLink>
                  </React.Fragment>
                );
              })
            ) : (
              <li className="list-group-item">No Products Found</li>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchField;