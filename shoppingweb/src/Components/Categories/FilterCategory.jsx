import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CommonProductCard from "../Common/CommonProductCard";
import { Slider } from "antd";

const FilterCategory = () => {
  const { productData } = useSelector((state) => ({
    productData: state.product.products,
  }));
  // ? To Filter Unique Category from the API Response
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const memoizedCategories = useMemo(() => uniqueCategory, [uniqueCategory]);
  const [selectedCategoryProduct, setSelectedCategoryProduct] =
    useState(productData);
  const handleCategoryChange = (e, selectedItem) => {
    e.preventDefault();
    if (selectedItem === "All") {
      setSelectedCategoryProduct(productData);
      return;
    }
    const filterProducts = productData.filter(
      (items, index) => items.category === selectedItem
    );
    setSelectedCategoryProduct(filterProducts);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChangeIndex = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const findCategory = [
      "All",
      ...new Set(
        productData && productData.map((items, index) => items.category)
      ),
    ];
    setUniqueCategory(findCategory);
    setSelectedCategoryProduct(productData);
    console.log("Selected", selectedCategoryProduct);
  }, [productData]);

  // ! Custom Filters
  const [customFilters, setCustomFilters] = useState({
    category: "All",
    price: 30,
    rating: 5,
  });
  const handleCustomFilters = (value, name) => {
    setCustomFilters((prev) => ({ ...prev, [name]: value }));
  };
  const findUniqueCompany = (productData) => {
    const uniqueCompany = productData.map((items, index) => items.brand);
    console.log("UniqueCompany", uniqueCompany);
  };

  /*   const filterProducts = (productData, customFilters) => {
    const { price, rating } = customFilters;
    const filterPriceData = productData.filter(
      (items, index) =>
        items.price >= price && Math.round(items.rating) <= rating
    );
    console.log("inside FilterPrice Function", filterPriceData);
  }; */
  /*   useEffect(() => {
    console.log("Filterss", customFilters);
    const delay = 1000;
    const debounce = setTimeout(() => {
      filterProducts(productData, customFilters);
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [customFilters]); */
  return (
    <React.Fragment>
      <Row>
        <Col lg={3} className="border-end">
          <div className="mb-5">
            <h4 className="mb-3">Categories</h4>
            <ul className="list-unstyled mb-0">
              {memoizedCategories &&
                memoizedCategories.length !== 0 &&
                memoizedCategories.map((items, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <span
                        className={`text-capitalize cursor-pointer ${
                          index === activeIndex ? "border-bottom" : null
                        }`}
                        onClick={(e) => {
                          handleCategoryChange(e, items);
                          handleChangeIndex(index);
                        }}
                      >
                        {items}
                      </span>
                    </li>
                  </React.Fragment>
                ))}
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">Filter by Price</h4>
            <Row className="align-items-center">
              <Col>
                <input
                  min={30}
                  max={2000}
                  type="number"
                  className="form-control form-control-sm"
                  value={customFilters.price}
                  onChange={(e) =>
                    handleCustomFilters(parseInt(e.target.value), e.target.name)
                  }
                />
              </Col>
              <Col lg={8}>
                <Slider
                  tooltip={{ open: true, placement: "right" }}
                  min={30}
                  max={2000}
                  step={100}
                  value={
                    typeof customFilters.price === "number"
                      ? customFilters.price
                      : 0
                  }
                  onChange={(e) => handleCustomFilters(e, "price")}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-4">
            <h4 className="mb-3">Filter by Rating</h4>
            <Row className="align-items-center">
              <Col>
                <input
                  min={1}
                  max={5}
                  type="number"
                  className="form-control form-control-sm"
                  value={customFilters.rating}
                  name="rating"
                  onChange={(e) =>
                    handleCustomFilters(parseInt(e.target.value), e.target.name)
                  }
                />
              </Col>
              <Col lg={8}>
                <Slider
                  tooltip={{ open: true, placement: "left" }}
                  defaultValue={1}
                  min={1}
                  max={5}
                  step={1}
                  value={
                    typeof customFilters.rating === "number"
                      ? customFilters.rating
                      : 0
                  }
                  onChange={(e) => handleCustomFilters(e, "rating")}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center">
            <div>Shop By Category</div>
            <h5>
              {selectedCategoryProduct && selectedCategoryProduct.length} :
              Products Found
            </h5>
          </div>
          <div className="mt-4">
            <Row className="gy-4">
              <h3 className="text-capitalize">
                {selectedCategoryProduct && selectedCategoryProduct.length !== 0
                  ? selectedCategoryProduct[0].category
                  : "All"}
              </h3>
              {selectedCategoryProduct &&
                selectedCategoryProduct.length !== 0 &&
                selectedCategoryProduct.map((items, index) => (
                  <React.Fragment key={index}>
                    <Col md={6} xl={4}>
                      <NavLink to={`/productdetails/${items.id}`}>
                        <CommonProductCard items={items} />
                      </NavLink>
                    </Col>
                  </React.Fragment>
                ))}
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterCategory;
