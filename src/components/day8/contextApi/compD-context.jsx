import { useContext } from "react";
import { CounterContext, FirstName, LastName, MiddleName } from "./../../../App";

const CompDContext = () => {
  const fname = useContext(FirstName);
  const mname = useContext(MiddleName);
  const lname = useContext(LastName);
  const { counter, handleIncrement } = useContext(CounterContext);

  return (
    <>
      <h1>Component-D</h1>
      <h2>Use Context: {`${fname} ${mname} ${lname}`}</h2>
      <h2>Counter: {counter} </h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default CompDContext;
