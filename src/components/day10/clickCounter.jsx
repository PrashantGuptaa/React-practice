import { useState } from "react";
import counterHoc from "./counterHoc";

const ClickCounter = (props) => {
  const { counter, handleIncrement } = props;

  return (
    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
      <h2>Name: {props.name} </h2>
    </>
  );
};

const EnhancedClickCounter = counterHoc(ClickCounter, 2);

export default EnhancedClickCounter;
