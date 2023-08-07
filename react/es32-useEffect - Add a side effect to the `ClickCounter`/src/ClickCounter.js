import React, { useEffect, useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => { return prev + 1 });
  };
  useEffect(()=>{console.log(count)},[count])
  return (
    <div>
      <button onClick={() => handleClick()}>incrementa</button>
      <h1>{count}</h1>
    </div>
  );
}
