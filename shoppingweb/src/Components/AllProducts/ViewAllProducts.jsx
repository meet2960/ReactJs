import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ITEM_PER_Page, getAllProducts } from "../../Redux/product/action";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Common/Loader";
import { useState } from "react";
import CustomPagination from "./CustomPagination";
const ViewAllProducts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: productList,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["allProducts", page],
    queryFn: () => dispatch(getAllProducts(page)),
    keepPreviousData: true,
  });
  const pageCount = Math.ceil(productList?.data?.total / ITEM_PER_Page);
  console.log("Total Page Count", pageCount);
  console.log("Error Message", error);
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div>
        <h3 className="text-center my-5">
          {`Error while Fetching Data from Server ${error.message}`}
        </h3>
      </div>
    );
  console.log("Received Data", productList?.data?.products);
  return (
    <div>
      <CustomPagination currentPage={page} pageCount={9} />
    </div>
  );
};

export default ViewAllProducts;
