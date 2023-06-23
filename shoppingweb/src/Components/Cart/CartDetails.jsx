import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../Redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { quantitySubTotal } from "../../utils/cartTotal";
const CartDetails = ({ cartItems }) => {
  const { formatCurrency } = useContext(CurrenctContext);
  const dispatch = useDispatch();
  const [dynamicColumns, setDynamicColumns] = useState([]);
  useEffect(() => {
    if (cartItems && cartItems.length !== 0) {
      // ? Generate Columns Names and Save them in state
      const generatedColumns = [
        { Header: "Sr.No" },

        {
          Header: "Images",
          accessor: "thumbnail",
        },
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Quantity",
          accessor: "quantity",
        },
        {
          Header: "Price",
          accessor: "price",
        },
        {
          Header: "Remove",
          accessor: "remove",
        },
      ];
      setDynamicColumns(generatedColumns);
      // console.log("Dyanmic Columns", generatedColumns);
    }
  }, [cartItems]);

  const columns = useMemo(() => {
    // ?  memoize the columns, so that no need to calculate again
    if (dynamicColumns && dynamicColumns.length !== 0) {
      return dynamicColumns;
    } else {
      return [];
    }
  }, [dynamicColumns]);
  // ? Contains original data to be displayed in table
  const data = useMemo(() => cartItems, [cartItems]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <React.Fragment>
      <div className="cart-content card">
        <div className="card-body">
          <h4 className="text-center my-3 pb-4 border-bottom fw-semibold">
            Purchase List <i className="bi bi-bag-check-fill" />
          </h4>
          {cartItems && cartItems.length !== 0 ? (
            <div className="table-responsive">
              <table
                className="table align-middle text-center"
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="me-2 bi bi-arrow-up"></i>
                              ) : (
                                <i className="me-2 bi bi-arrow-down"></i>
                              )
                            ) : (
                              ""
                            )}
                          </span>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="text-center fw-medium"
                  {...getTableBodyProps()}
                >
                  {rows.map((row, rowIndex) => {
                    // console.log("Row", row.original);
                    const selectedItem = row.original; // get selected id
                    console.log("selectedItem", selectedItem);
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                          // console.log("Cell", cell);
                          if (cell.column.Header === "Sr.No") {
                            return (
                              <td {...cell.getCellProps()}>{rowIndex + 1}</td>
                            );
                          } else if (cell.column.Header === "Images") {
                            return (
                              <td {...cell.getCellProps()}>
                                <img
                                  src={cell.value}
                                  alt={cell.Title}
                                  className="avatar-md"
                                />
                              </td>
                            );
                          } else if (cell.column.Header === "Remove") {
                            return (
                              <td {...cell.getCellProps()}>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    dispatch(removeItem(selectedItem.id))
                                  }
                                >
                                  <i className="bi bi-x" />
                                </button>
                              </td>
                            );
                          } else if (cell.column.Header === "Quantity") {
                            return (
                              <td {...cell.getCellProps()}>
                                <div className="d-flex justify-content-evenly p-1 rounded-5 cart-quantity">
                                  <div
                                    className="cursor-pointer"
                                    onClick={() =>
                                      dispatch(
                                        decreaseQuantity(selectedItem.id)
                                      )
                                    }
                                  >
                                    <i className="bi bi-dash" />
                                  </div>
                                  <div>{cell.render("Cell")}</div>
                                  <div
                                    className="cursor-pointer"
                                    onClick={() =>
                                      dispatch(
                                        increaseQuantity(selectedItem.id)
                                      )
                                    }
                                  >
                                    <i className="bi bi-plus" />
                                  </div>
                                </div>
                              </td>
                            );
                          } else if (cell.column.Header === "Price") {
                            return (
                              <td {...cell.getCellProps()}>
                                <span className="">
                                  {formatCurrency(
                                    quantitySubTotal(selectedItem)
                                  )}
                                </span>
                                {/* <span>{formatCurrency(cell.value)}</span> */}
                              </td>
                            );
                          } else {
                            return (
                              <td {...cell.getCellProps()}>
                                <span>{cell.render("Cell")}</span>
                              </td>
                            );
                          }
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-5">
              <h3 className="text-center">Please Add Items in Cart</h3>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartDetails;
