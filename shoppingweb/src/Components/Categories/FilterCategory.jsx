import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const FilterCategory = () => {
  document.title = "Ecommerce | Category";
  const { productData } = useSelector((state) => ({
    productData: state.product.products,
  }));
  const [uniqueCategory, setUniqueCategory] = useState([]);

  useEffect(() => {
    console.log("Products is", productData);
    const findCategory = [
      ...new Set(
        productData && productData.map((items, index) => items.category)
      ),
    ];
    setUniqueCategory(findCategory);
    console.log("Category is", uniqueCategory);
  }, [productData]);
  const memoizedCategories = useMemo(() => uniqueCategory, [uniqueCategory]);
  return (
    <React.Fragment>
      <section className="mt-4 category">
        <Container>
          <Row>
            <Col lg={2}>
              <h3 className="mb-3">Categories</h3>
              <div>
                <ul className="list-unstyled">
                  {memoizedCategories &&
                    memoizedCategories.length !== 0 &&
                    memoizedCategories.map((items, index) => (
                      <React.Fragment>
                        <li key={index} className="text-capitalize">
                          {items}
                        </li>
                      </React.Fragment>
                    ))}
                </ul>
              </div>
            </Col>
            <Col lg={9}>
              <div>
                <div className="d-flex">
                  <div>Shop By Category</div>
                  <div>Filters Here</div>
                </div>
                <div>
                  <h3>Selected Product</h3>
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
