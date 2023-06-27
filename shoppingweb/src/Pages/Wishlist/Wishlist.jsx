import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishlist.wishListItems);
  useEffect(() => {
    console.log("Inside Page", wishListItems);
  }, [wishListItems]);
  return (
    <React.Fragment>
      <section>
        <Container>
          <h1>Total Items in WishList {wishListItems.length}</h1>
          {/* <p>{wishListItems.length}</p> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Wishlist;
