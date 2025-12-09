"use client"
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="mr-5 p-4 border"
      >
        +
      </button>{" "}
      <button onClick={() => setCounter(counter - 1)} className="border p-4">
        -
      </button>
    </div>
  );
};

export default Counter;
