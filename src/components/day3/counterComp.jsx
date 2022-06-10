const CounterComp = (props) => {
  const { value, handleClick, index } = props;

  const handleIncrementClick = () => {
      handleClick(index);
  }
  return (
    <>
      <h1>Counter: {value} </h1>
      <button onClick={handleIncrementClick}>Increment</button>
    </>
  );
};

export default CounterComp;
