import React from "react";
import { Pagination } from "antd";
const CustomPagination = ({ page, setPage, totalProduct, onChange }) => {
  console.log("Inside Pagination Page Count", totalProduct);
  return (
    <React.Fragment>
      <div className="my-4 d-flex justify-content-center">
        <Pagination
          defaultCurrent={1}
          total={totalProduct}
          showSizeChanger={false}
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomPagination;
