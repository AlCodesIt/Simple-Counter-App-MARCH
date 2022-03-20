import React, { useState } from "react";
import "./index.css";

const Data = () => {
  // UseState To Increment And Decrement
  const [counter, setCounter] = useState(0);

  // Functions To Update The State

  let decrement = () => {
    setCounter(counter - 1);
  };

  let increment = () => {
    setCounter(counter + 1);
  };

  // Return The Component UI With Functionality
  return (
    <div className="heading">
      <h1 className="heading__title">Simple Counter App</h1>
      <div className="Counter">
        <button className="Buttons" onClick={decrement}>
          -
        </button>
        <div className="Counter__Number">{counter}</div>
        <button className="Buttons" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Data;
