import React from "react";
import { Container } from "reactstrap";
import FilterCategory from "../../Components/Categories/FilterCategory";

const Category = () => {
  document.title = "Category | Ecommerce";
  return (
    <Container fluid>
      <FilterCategory />
    </Container>
  );
};

export default Category;
