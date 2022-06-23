import { useState } from "react";
import counterHoc from "./counterHoc";

const MouseOverCounter = (props) => {

  const { counter, handleIncrement } = props;

  return (
    <>
      <h1 onMouseOver={handleIncrement}>
        Mouse Hovered Times: {counter}
      </h1>
    </>
  );
};

const EnhancedMouseOverCounter = counterHoc(MouseOverCounter, 10);

export default EnhancedMouseOverCounter;
