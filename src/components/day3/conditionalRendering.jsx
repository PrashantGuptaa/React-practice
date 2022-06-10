import { useState } from "react";

const ConditionalRendering = () => {
  const [showApple, setShowApple] = useState(false);

  setInterval(() => {
      setShowApple(!showApple)
  }, 3000);
  return (
    <>{showApple ? <h1>Apple is Present</h1> : <h2>Banana is Present</h2>}</>
  );
};

export default ConditionalRendering;


// arr.length == 0 ? <Loader /> : <Card arr={arr} />