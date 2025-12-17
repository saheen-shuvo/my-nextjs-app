"use client";

import { decrement, increment, incrementByValue } from "@/redux/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count  = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-dash border"
      >
        increment
      </button>{" "}
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="btn btn-dash border"
      >
        increment by 5
      </button>{" "}
      <button
        onClick={() => dispatch(decrement())}
        className="border btn btn-accent"
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
