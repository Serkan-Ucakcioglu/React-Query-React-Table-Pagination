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
      <div className="pagination mt-4 border border-black flex justify-between items-center p-2">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="p-1 rounded border border-black bg-white text-black"
        >
          prev
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="p-1 border border-black bg-white text-black"
        >
          next
        </button>{" "}
      </div>
    </div>
  );
}

export default Table;
