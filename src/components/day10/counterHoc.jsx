import React, { useState } from "react";

const counterHoc = (Component, value) => {
  const UpgradedComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(counter + value);

    return <Component counter={counter} handleIncrement={handleIncrement} />;
  };

  return UpgradedComponent;
};

export default counterHoc;


// Click -> 1
// RightClick -> 5
// MouseOver -> -2