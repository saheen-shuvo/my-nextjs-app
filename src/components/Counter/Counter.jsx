"use client"
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-dash border"
      >
        +
      </button>{" "}
      <button onClick={() => setCounter(counter - 1)} className="border btn btn-accent">
        -
      </button>
    </div>
  );
};

export default Counter;
