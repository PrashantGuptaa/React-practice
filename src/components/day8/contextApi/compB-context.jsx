import CompCContext from "./compC-context";
import CompDContext from './compD-context';
import { useContext } from 'react';
import { CounterContext } from "../../../App";

const CompBContext = () => {
  const { counter  } = useContext(CounterContext);
  return (
    <>
      <h1>Component-B</h1>
      <h1>Counter-B: {counter} </h1>
      <CompCContext />
      <CompDContext />
    </>
  );
};

export default CompBContext;
