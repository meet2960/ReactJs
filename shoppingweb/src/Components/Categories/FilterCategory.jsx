import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CommonProductCard from "../Common/CommonProductCard";
import saleImg from "../../assets/images/category-img-widget.jpg";
import { Slider } from "antd";

const FilterCategory = () => {
  const { productData } = useSelector((state) => ({
    productData: state.product.products,
  }));
  // ? To Filter Unique Category from the API Response
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const memoizedCategories = useMemo(() => uniqueCategory, [uniqueCategory]);
  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState([]);
  const handleCategoryChange = (e, selectedItem) => {
    e.preventDefault();
    console.log("Items", selectedItem);
    const filterProducts = productData.filter((items, index) => {
      return items.category === selectedItem;
    });
    setSelectedCategoryProduct(filterProducts);
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const handleChangeIndex = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const findCategory = [
      ...new Set(
        productData && productData.map((items, index) => items.category)
      ),
    ];
    setUniqueCategory(findCategory);
    console.log("Selected", selectedCategoryProduct);
  }, [productData, selectedCategoryProduct]);

  const [price, setPrice] = useState(30);
  const handlePriceChange = (value) => {
    setPrice(parseInt(value));
  };
  const filterByPrice = (productData, price) => {
    const filterPriceData = productData.filter(
      (items, index) => items.price >= price
    );
    // setSelectedCategoryProduct(filterByPrice);
    console.log("inside FilterPrice Function", filterPriceData);
  };
  useEffect(() => {
    const delay = 1000;
    const debounce = setTimeout(() => {
      filterByPrice(productData, price);
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [price]);
  return (
    <React.Fragment>
      <Row>
        <Col lg={3} className="border-end">
          <ul className="list-unstyled ">
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
          <div className="border-top py-3">
            <label htmlFor="price" className="form-label w-100">
              Price
            </label>
            <Row>
              <Col>
                <input
                  min={30}
                  max={2000}
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => handlePriceChange(e.target.value)}
                />
              </Col>
              <Col lg={8}>
                <Slider
                  tooltip={{ open: true }}
                  min={30}
                  max={2000}
                  step={100}
                  value={typeof price === "number" ? price : 0}
                  onChange={handlePriceChange}
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
                  : null}
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
