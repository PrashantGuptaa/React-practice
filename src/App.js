import "./App.css";
import { useState, createContext } from "react";
import CompAContext from "./components/day8/contextApi/CompA-context";

export const FirstName = createContext();
export const LastName = createContext();
export const MiddleName = createContext();
export const CounterContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  const obj = {
    counter,
    handleIncrement
  }

  return (
    <div className="App">
      <FirstName.Provider value={"Prashant"}>
        <LastName.Provider value={"Gupta"}>
          <MiddleName.Provider value={"Middle-Name"}>
            <CounterContext.Provider value={obj}>
              <CompAContext />
            </CounterContext.Provider>
          </MiddleName.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
