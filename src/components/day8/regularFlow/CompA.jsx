import CompB from "./compB";

const CompA = (props) => {
  return (
    <>
      <h1>Component-A</h1>
      <CompB counter={props.counter} />
    </>
  );
};

export default CompA;
