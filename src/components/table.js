import React from "react";
import "../styles/table.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const Table = ({ rowData, columnDefs }) => {
  return (
    <div
      className="ag-theme-balham"
      style={{ height: 400, width: "80%", alignContent: "center" }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Table;
