import "./App.css";
import mySg, { States } from "./components/day2/states";
import StateClass from "./components/day2/stateClass";

function App() {
  return (
    <div className="App">
      {mySg}
      <States />
      <StateClass />
    </div>
  );
}

export default App;
