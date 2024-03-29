import React, { useMemo, useState } from "react";
import { Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { getAllProducts } from "../../store/product/action";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Common/Loader";
import CustomPagination from "./CustomPagination";
import CommonProductCard from "../Common/CommonProductCard";

const ViewAllProducts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
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
  const totalProduct = useMemo(() => {
    return productList?.data?.total;
  }, [productList]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div>
        <h3 className="text-center my-5">
          {`Error while Fetching Data from Server ${error.message}`}
        </h3>
      </div>
    );

  return (
    <React.Fragment>
      <Row className="gy-4">
        {productList &&
          productList?.data?.products.length !== 0 &&
          productList?.data?.products.map((items, index) => {
            return (
              <Col md={6} lg={4} xl={3} key={index}>
                <NavLink to={`/productdetails/${items.id}`}>
                  <CommonProductCard items={items} />
                </NavLink>
              </Col>
            );
          })}
      </Row>
      <CustomPagination
        onChange={handlePageChange}
        currentPage={page}
        totalProduct={totalProduct}
      />
    </React.Fragment>
  );
};

export default ViewAllProducts;