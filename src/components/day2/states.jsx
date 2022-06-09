import React, { useState } from "react";

const States = () => {
    const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// export States;

export const mySg = "Hello World";

export default States;

