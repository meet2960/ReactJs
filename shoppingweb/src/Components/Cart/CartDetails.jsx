import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useSortBy, useTable } from "react-table";
const CartDetails = ({ cartItems }) => {
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
      console.log("Dyanmic Columns", generatedColumns);
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
      <div className="cart-content shadow p-3 rounded-3">
        <h4 className="text-center mb-4 fw-semibold">
          Purchase List <i className="bi bi-bag-check-fill" />
        </h4>
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
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i class="me-2 bi bi-arrow-up"></i>
                          ) : (
                            <i class="me-2 bi bi-arrow-down"></i>
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
            <tbody className="text-center" {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      console.log("Cell", cell);
                      if (cell.column.Header === "Sr.No") {
                        return <td {...cell.getCellProps()}>{rowIndex + 1}</td>;
                      } else if (cell.column.Header === "Images") {
                        console.log("Image Cell", cell);
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
                            <button type="button" className="btn btn-primary">
                              <i class="bi bi-x" />
                            </button>
                          </td>
                        );
                      } else if (cell.column.Header === "Quantity") {
                        return (
                          <td>
                            <div className="d-inline-block p-1 rounded-5 cart-quantity">
                              <span>
                                <i class="bi bi-dash" />
                              </span>
                              <span>{cell.render("Cell")}</span>
                              <span>
                                <i class="bi bi-plus" />
                              </span>
                            </div>
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

        {/*   <Container>
          {cartItems &&
            cartItems.length !== 0 &&
            cartItems.map((items, index) => {
              return (
                <React.Fragment key={index}>
                  <Row>
                    <Col lg={"auto"}>
                      <img
                        src={items.thumbnail}
                        alt="title"
                        className="img-fluid avatar-md"
                      />
                    </Col>
                    <Col>
                      <h6>{items.title}</h6>
                    </Col>
                  </Row>
                </React.Fragment>
              );
            })}
        </Container> */}
      </div>
    </React.Fragment>
  );
};

export default CartDetails;