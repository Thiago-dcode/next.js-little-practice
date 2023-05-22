import { useState } from "react";
import { ButtonWrapper } from "./buttonWrapper";
import React from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 role="contentinfo">Counter: {count}</h1>
      <ButtonWrapper
        title="+"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      />
      <ButtonWrapper
        title="-"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      />
    </div>
  );
}
