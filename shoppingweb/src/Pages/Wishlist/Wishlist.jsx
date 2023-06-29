import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
const Wishlist = () => {
  document.title = "Login | Ecommerce";
  const wishListItems = useSelector((state) => state.wishlist.wishListItems);
  useEffect(() => {
    console.log("Inside Page", wishListItems);
  }, [wishListItems]);
  return (
    <React.Fragment>
      <section className="my-4 wishlist-section">
        <Container>
          <div>
            <h1 className="text-center">My Wishlist {wishListItems.length}</h1>
            <div></div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Wishlist;
