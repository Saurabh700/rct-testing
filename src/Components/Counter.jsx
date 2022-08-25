import React from "react";
import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <div onClick={() => setCount((prev) => prev - 5)}>
        <Button>Decrement Count</Button>
      </div>
      <div onClick={() => setCount((prev) => prev + 5)}>
        <Button>Increment Count</Button>
      </div>
    </div>
  );
};

export default Counter;
