import React from "react";

const ExportCSV = ({ data }) => {
  const handleExport = () => {
    let file = new Blob([data], { type: "text/csv" });
    let a = document.createElement("a");
    let url = URL.createObjectURL(file);
    a.href = url;
    a.download = `UserDetails_${Date.now().toString()}`;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  };

  return <button onClick={handleExport}>Export</button>;
};

export default ExportCSV;
