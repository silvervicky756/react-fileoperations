import React from "react";

const FileMetaData = ({ filename, lastModifiedDate, size }) => {
  return (
    <>
      <h4>FileName: {filename}</h4>
      <h4>LastModifiedDate: {lastModifiedDate}</h4>
      <h4>Size in Bytes: {size}</h4>
    </>
  );
};

export default FileMetaData;
