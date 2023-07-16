import React from "react";
import { Col, Row } from "reactstrap";
import { Pagination } from "antd";
const CustomPagination = ({ page, setPage, pageCount }) => {
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={12}
        // showLessItems={true}
        // hideOnSinglePage={false}
        total={100}
      />
      {/* <Row className="justify-content-between align-items-center mt-3">
        <Col xs={"auto"}>
          <button
            type="button"
            className="btn btn-dark"
            disabled={page === 1}
            onClick={() => setPage((prevPage) => page - 1)}
          >
            Prev
          </button>
        </Col>
        <Col className="d-flex justify-content-center">
          <div>Paginations</div>
        </Col>
        <Col xs={"auto"}>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setPage((prevPage) => page + 1)}
            disabled={page === pageCount}
          >
            Next {page}
          </button>
        </Col>
      </Row> */}
    </div>
  );
};

export default CustomPagination;
