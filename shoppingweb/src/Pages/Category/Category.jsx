import React from "react";
import { Container } from "reactstrap";
import FilterCategory from "../../Components/Categories/FilterCategory";
import CommonHeading from "../../Components/Common/CommonHeading";

const Category = () => {
  document.title = "Category | Ecommerce";
  return (
    <React.Fragment>
      <section className="my-4 category">
        <Container>
          <CommonHeading key={"Category"} heading={"Category"} />
          <FilterCategory />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Category;
