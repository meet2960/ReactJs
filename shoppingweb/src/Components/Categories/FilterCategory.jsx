import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CommonProductCard from "../Common/CommonProductCard";
import saleImg from "../../assets/images/category-img-widget.jpg";

const FilterCategory = () => {
  document.title = "Ecommerce | Category";
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

  return (
    <React.Fragment>
      <section className="my-4 category">
        <Container>
          <Row>
            <Col lg={3} className="border-end">
              <h3 className="mb-3">Categories</h3>
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
              <div>
                <img src={saleImg} alt="sale" className="img-fluid" />
              </div>
            </Col>
            <Col lg={9}>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>Shop By Category</div>
                  <h5>
                    {selectedCategoryProduct && selectedCategoryProduct.length}{" "}
                    : Products Found
                  </h5>
                </div>
                <div className="mt-4">
                  <h3 className="text-capitalize">
                    {selectedCategoryProduct &&
                    selectedCategoryProduct.length !== 0
                      ? selectedCategoryProduct[0].category
                      : null}
                  </h3>
                  <div>
                    <Row className="gy-4">
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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FilterCategory;
