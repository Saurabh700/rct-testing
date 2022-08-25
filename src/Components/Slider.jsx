import React, { useState } from "react";

const Slider = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      id: 1,
      question: "what is closure",
      answer:
        "closure is a combinatin of functions bundled together with reference to the surrounding environment",
    },
    {
      id: 2,
      question: "what is linked list",
      answer:
        "linked list is a linear data structure in which data is not stored sequentially inside the memory instead the data is linked with each other with the help of their address",
    },
    {
      id: 3,
      question: "what is a flexbox",
      answer:
        "flexbox is used to arrange data in 1d, either along rows or columns",
    },
  ];
  return (
    <div>
      <div>{data[count].question}</div>
      <div>{data[count].answer}</div>
      <button
        disabled={count === 0}
        onClick={() => setCount((prev) => prev - 1)}
      >
        prev
      </button>
      <button
        disabled={count === 2}
        onClick={() => setCount((prev) => prev + 1)}
      >
        next
      </button>
    </div>
  );
};

export default Slider;
