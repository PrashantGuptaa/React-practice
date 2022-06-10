import "./day3Styles.css";

const StylingComponent = () => {
  const styleObj = { backgroundColor: "red", color: "blue" };

  return (
    <>
      <h1 style={styleObj}>I'm Style Component</h1>
      <h2 className="heading">Second Tag</h2>
      <h3 style={{ backgroundColor: "pink", color: "grey" }}>Third Tag</h3>
    </>
  );
};

export default StylingComponent;
