import "./App.css";
import ClickCounter from "./components/day10/clickCounter";
import MouseOverCounter from "./components/day10/mouseOverCounter";
import RightClickCounter from "./components/day10/rightClickCounter";

function App() {

  return (
    <div className="App">
      <ClickCounter  />
      <RightClickCounter />
      <MouseOverCounter />
    </div>
  );
}

export default App;
