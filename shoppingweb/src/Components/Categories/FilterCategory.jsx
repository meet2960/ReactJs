import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const FilterCategory = () => {
  document.title = "Ecommerce | Category";
  const { productData } = useSelector((state) => ({
    productData: state.product.products,
  }));
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log("Products is", productData);
    const uniqueCategory = [
      ...new Set(
        productData && productData.map((items, index) => items.category)
      ),
    ];
    setCategory(uniqueCategory);
    console.log("Category is", category);
  }, [productData]);
  const memoizedCategories = useMemo(() => category, [category]);
  return (
    <React.Fragment>
      <Container>
        All Categories Will be Displayed Here
        <h1>
          Length :-
          {memoizedCategories.length}
        </h1>
        <Row>
          {memoizedCategories &&
            memoizedCategories.length !== 0 &&
            memoizedCategories.map((items, index) => (
              <React.Fragment>
                <Col key={index}>{items}</Col>
              </React.Fragment>
            ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FilterCategory;
