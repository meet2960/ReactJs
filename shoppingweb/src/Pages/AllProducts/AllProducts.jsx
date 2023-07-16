import React from "react";
import { Container } from "reactstrap";
import CommonHeading from "../../Components/Common/CommonHeading";
import ViewAllProducts from "../../Components/AllProducts/ViewAllProducts";
const AllProducts = () => {
  return (
    <section className="allproducts my-4">
      <Container>
        <CommonHeading key={"allproducts"} heading={"All Products"} />
        <p className="text-center mb-4">
          Here you can View All the available products.
        </p>
        <ViewAllProducts />
      </Container>
    </section>
  );
};

export default AllProducts;
