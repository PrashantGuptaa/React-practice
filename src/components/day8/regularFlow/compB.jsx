import CompC from "./compC";

const CompB = (props) => {
  return (
    <>
      <h1>Component-B</h1>
      <CompC counter={props.counter} />
    </>
  );
};

export default CompB;
