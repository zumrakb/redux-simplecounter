import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";
function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <br></br>
      <br></br>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(amount));
        }}
      >
        Increment by amount
      </button>
    </div>
  );
}

export default Counter;
