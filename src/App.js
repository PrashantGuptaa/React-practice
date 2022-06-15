import "./App.css";
import LifeCycleMethods from "./components/day4/lifeCycleMethods";
import { useState } from "react";

function App() {
  const [showLifeCycleComponent, setShowLifeCycleComponent] = useState(true);

  return (
    <div className="App">
      {showLifeCycleComponent ? <LifeCycleMethods /> : null}
      <button
        onClick={() => setShowLifeCycleComponent(!showLifeCycleComponent)}
      >
        Show/Hide LifeCycle Component
      </button>
    </div>
  );
}

export default App;

