import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

const Tables = () => {
  const productData = useSelector((state) => state.product.products);

  /* const columns = useMemo(
      () => [
        { Header: "ID", accessor: "id" },
        { Header: "Title", accessor: "title" },
        { Header: "Description", accessor: "description" },
        { Header: "Price", accessor: "price" },
        { Header: "Discount", accessor: "discountPercentage" },
        { Header: "Rating", accessor: "rating" },
        { Header: "Stock", accessor: "stock" },
        { Header: "Brand", accessor: "brand" },
        { Header: "Category", accessor: "category" },
      ],
      []
    ); */
  const [dynamicColumns, setDynamicColumns] = useState([]);
  useEffect(() => {
    if (productData && productData.length !== 0) {
      const columnNames = Object.keys(productData[0]);
      const generatedColumns = columnNames.map((items) => {
        const newItems = items.charAt(0).toUpperCase() + items.slice(1);
        return {
          Header: newItems,
          accessor: items,
        };
      });
      setDynamicColumns(generatedColumns);
      console.log("Dyanmic Columns", generatedColumns);
    }
  }, [productData]);
  const columns = useMemo(() => {
    if (dynamicColumns && dynamicColumns.length !== 0) {
      return dynamicColumns;
    } else {
      return [];
    }
  }, [dynamicColumns]);
  const data = useMemo(() => productData, [productData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <Container>
      <h2>Examples of React Tables</h2>
      <div className="table-responsive">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Tables;