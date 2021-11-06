import React, { useState } from "react";
import FileMetaData from "./file-metadata";
import Table from "./table";
import ExportCSV from "./export-csv";

const ImportCSV = () => {
  const [flag, setFlag] = useState(false);
  const [fileData, setFileData] = useState({});
  const [rows, setRows] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const fileInput = e.target["csvfile"];
    const fileList = fileInput.files;
    const firstFileBlob = fileList[0];
    console.log(fileList[0]);
    setFileData({
      filename: firstFileBlob.name,
      lastModifiedDate: firstFileBlob.lastModifiedDate.toString(),
      size: firstFileBlob.size,
    });
    let text = await firstFileBlob.text();
    let rows = text.split("\n");
    setRows(rows);
    setFlag(true);
  };

  return (
    <>
      <form
        style={{ textAlign: "center", alignContent: "center", margin: "2rem" }}
        onSubmit={submitHandler}
      >
        <label htmlFor="csvfile">Select the CSV File</label>
        <br />
        <input
          type="file"
          accept=".csv,application/vnd.ms-excel"
          name="csvfile"
          multiple={false}
        />
        <br />
        <button type="submit">Import</button>
      </form>
      {flag && <FileMetaData {...fileData}></FileMetaData>}
      {flag && <Table data={rows}></Table>}
      {flag && <ExportCSV data={rows.join("\n")}></ExportCSV>}
    </>
  );
};

export default ImportCSV;
