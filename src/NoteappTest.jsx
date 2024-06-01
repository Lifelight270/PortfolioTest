// import { list } from "postcss";
import React, { useState,useEffect,useRef } from "react";


const NoteappTest = () => {
  const isInitialized =useRef(false)
  const addMoretext = [
    {
      id: 3,
      name: "light",
    },
    {
      id: 4,
      name: "life",
    },
  ];

  const [txt, setTxt] = useState([
    { id: 1, name: "janak" },
    { id: 2, name: "jeevan" },
  ]);

   useEffect(()=>{
    if(!isInitialized.current){
      setTxt((prevText)=>[...prevText, ...addMoretext]);
      isInitialized.current=true;
    }
    },[]);
  return (
    <div>
      {/* <button onClick={addText}>Add</button> */}
      {txt.map((todo) => (
        <li key={todo.id}>
          Date is: {todo.id} and Name is: {todo.name}
        </li>
      ))}
    
    </div>
  );
};

export default NoteappTest;
