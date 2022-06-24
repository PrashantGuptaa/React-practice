import "./App.css";
import ClickCounter from "./components/day10/clickCounter";
import MouseOverCounter from "./components/day10/mouseOverCounter";
import RightClickCounter from "./components/day10/rightClickCounter";
import FetchComponentClass from "./components/day11/fetchComponentClass";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <FetchComponentClass /> : null}
      <button onClick={() => setShow(!show)}>Show/Hide</button>
    </div>
  );
}

export default App;
