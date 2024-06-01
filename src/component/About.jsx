import React from "react";
import DownloadButton from "./DownloadButton";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="h-screen flex items-center justify-center bg-green-500">
        <h1 className="text-white text-4xl">About</h1>
        <DownloadButton />
      </div>
    </>
  );
};

export default About;
