import { useState, useEffect } from "react";

const EventHandling = () => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, [])

  const handleKeyDown = (e) => console.log("=== On key down ===", e.keyCode)

  const handleClick = () => {
    console.log("Clicked");
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input value={inputVal} onChange={handleChange} />
      <h1
        onMouseOver={() =>
          console.log("=================== Mouse Hovered ===================")
        }
      >
        Welcome to Prepbytes
      </h1>
      <h1  >This is a On Key Down Event</h1>
    </div>
  );
};

export default EventHandling;
