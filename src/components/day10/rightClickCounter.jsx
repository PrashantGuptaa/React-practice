import { useState } from "react";
import counterHoc from "./counterHoc";

const RightClickCounter = (props) => {

  const { counter, handleIncrement } = props;
  return (
    <>
      <h1>Right Click Counter: {counter}</h1>
      <button onContextMenu={handleIncrement}>
        Right Click Counter
      </button>
    </>
  );
};

const EnhancedRightClickCounter = counterHoc(RightClickCounter, -2);

export default EnhancedRightClickCounter;
