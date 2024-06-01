import React from "react";

const DownloadButton = () => {
  return (
    <div className="flex justify-center mt-8">
    <a
      href="/Biodata.pdf"
      download="My_Biodata.pdf"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download My CV
    </a>
  </div>
  );
};

export default DownloadButton;
