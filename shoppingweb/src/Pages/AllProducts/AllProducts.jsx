import React from "react";
import { Container } from "reactstrap";
import CommonHeading from "../../Components/Common/CommonHeading";
import ViewAllProducts from "../../Components/AllProducts/ViewAllProducts";
const AllProducts = () => {
  return (
    <section className="allproducts my-4">
      <Container>
        <CommonHeading key={"allproducts"} heading={"View All Products"} />
        <ViewAllProducts />
      </Container>
    </section>
  );
};

export default AllProducts;
