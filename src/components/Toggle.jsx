import React from "react";
import "./Toggle.css";
import { useState } from "react";
const Toggle = () => {
  const [data, setData] = useState("I m saravanan");
  const clickHandler = () => {
    setData((prevState) => (prevState !== "" ? "" : "I m saravanan"));
  };
  return (
    <div className="toggle">
      <div className="main">
        <div>{data}</div>
        <button onClick={clickHandler}>Toggle</button>
      </div>
    </div>
  );
};

export default Toggle;
