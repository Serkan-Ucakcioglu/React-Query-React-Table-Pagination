import { usePagination, useTable } from "react-table";
import { columns } from "./Columns";

function Table({ data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="flex flex-col">
      <table {...getTableProps()}>
        <thead className="border border-black">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-left">
                {row.cells.map((cell) => (
                  <td className="text-left" {...cell.getCellProps()}>
                    {cell.render("Cell")}.
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination mt-4 border border-black">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
}

export default Table;
