import "./App.css";
import { useState, createContext } from "react";
import CompAContext from "./components/day8/contextApi/CompA-context";

export const FirstName = createContext();
export const LastName = createContext();
export const MiddleName = createContext();
export const CounterContext = createContext();

function App() {
  const [name, setName] = useState("");

  console.log(name);

  const getMessage = () => {
    if (name.length < 8) {
      return <h3>Password should be greater than 8 letters</h3>;
    } else if (name.length > 12) {
      return <h3>Password length should be less than 12 letters</h3>;
    } else {
      return <h3>Password is good</h3>;
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="uncontrolled">Uncontrolled Component</label>
        <input id="uncontrolled" />
      </div>
      
      <div>
        <label htmlFor="controlled">Controlled Component</label>

        <input
          id="controlled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {getMessage()}
    </div>
  );
}

export default App;
