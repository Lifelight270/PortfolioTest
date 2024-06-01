import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

// import NoteappTest from "./NoteappTest";
// import "./index.css";
// import Accordion from "react-bootstrap/Accordion";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      
      <Contact />
    </>
  );
};

export default App;
