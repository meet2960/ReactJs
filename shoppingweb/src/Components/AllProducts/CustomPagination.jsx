import React from "react";
import { Pagination } from "antd";
import { ITEM_PER_Page } from "../../store/product/action";

const CustomPagination = ({ page, setPage, totalProduct, onChange }) => {
  console.log("Inside Pagination Page Count", totalProduct);
  return (
    <React.Fragment>
      <div className="my-4 d-flex justify-content-center">
        <Pagination
          className="custom-pagination"
          defaultCurrent={1}
          total={totalProduct}
          showSizeChanger={false}
          onChange={onChange}
          pageSize={ITEM_PER_Page}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomPagination;