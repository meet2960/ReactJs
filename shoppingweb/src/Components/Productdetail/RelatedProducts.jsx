import React from "react";
import DisplayProductSlider from "../Common/DisplayProductSlider";
import CommonHeading from "../Common/CommonHeading";

const RelatedProducts = () => {
  return (
    <React.Fragment>
      <section className="my-5">
        <div className="related-products  fs-16">
          <CommonHeading heading={"Related Products"} />
          <p className="text-center mb-4">
            Look at this recommended Products to Buy from with lowest Price
            Every and Most Discount...!!!
          </p>
          <DisplayProductSlider />
        </div>
      </section>
    </React.Fragment>
  );
};

export default RelatedProducts;
