import React, { useEffect, useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  useEffect(() => {
    const intervallo = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => {
      clearInterval(intervallo);
    };
  }, [count]);
  return (
    <div>
      <button onClick={() => handleClick()}>incrementa</button>
      <h1>{count}</h1>
    </div>
  );
}
