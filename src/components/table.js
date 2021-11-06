import React from "react";
import "../styles/table.css";

const Table = ({ data }) => {
  return (
    <>
      {data.map((row) => (
        <Row row={row}></Row>
      ))}
    </>
  );
};

const Row = ({ row }) => {
  const cells = row.split(",");
  return (
    <tr>
      {cells.map((cell) => (
        <td>{cell}</td>
      ))}
    </tr>
  );
};

export default Table;
