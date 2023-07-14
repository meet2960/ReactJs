import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import CommonHeading from "../../Components/Common/CommonHeading";
import CommonProductCard from "../../Components/Common/CommonProductCard";
import { NavLink } from "react-router-dom";
const Wishlist = () => {
  document.title = "Wishlist | Ecommerce";
  const wishListItems = useSelector((state) => state.wishlist.wishListItems);
  useEffect(() => {
    console.log("Inside Page", wishListItems);
  }, [wishListItems]);
  return (
    <React.Fragment>
      <section className="my-4 wishlist-section">
        <Container>
          <CommonHeading heading={"My Wishlist"} />
          <div className="card">
            <div className="card-body p-4">
              <Row className=" mb-3 justify-content-between">
                <Col>
                  <h5>Don't Let your Wishlist let go !</h5>
                </Col>
                <Col xs={"auto"}>
                  <h5>
                    <span>Total: </span>
                    <span>{wishListItems && wishListItems.length}</span>
                  </h5>
                </Col>
              </Row>
              <Row className="gy-3">
                {wishListItems && wishListItems.length !== 0 ? (
                  wishListItems.map((items, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Col md={6} xl={3}>
                          <NavLink to={`/productdetails/${items.id}`}>
                            <CommonProductCard items={items} />
                          </NavLink>
                        </Col>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className="p-5">
                    <h3 className="text-center">No Products in wishlist</h3>
                  </div>
                )}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Wishlist;
