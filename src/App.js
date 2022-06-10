import "./App.css";
import Card from "./components/day3/card";
import CounterComp from "./components/day3/counterComp";
import ReactProps from "./components/day3/reactProps";
import { useState } from 'react';
import ConditionalRendering from "./components/day3/conditionalRendering";

function App() {

  const [counters, setCounters] = useState([10, 20, 30]);

  const fruits = [
    { name: "Apple", id: 1, description: "Color is red", season: "Winter" },
    {
      name: "banana",
      id: 2,
      description: "Color is Yellow",
      season: "All Season",
    },
    { name: "Orange", id: 3, description: "Color is orange", season: "Autumn" },
    {
      name: "PineApple",
      id: 4,
      description: "Color is Yellow",
      season: "Summer",
    },
    { name: "Guava", id: 5, description: "Color is Green", season: "Rainy" },
  ];


  const handleClick = (index) => {
    const copyCounter = [...counters];
    copyCounter[index] = copyCounter[index] + 10;
    setCounters(copyCounter);
  };

  return (
    <div className="App">
      {/* {fruits.map((fruitObj) => (
        <ReactProps name={fruitObj.name} id = {fruitObj.id}/>
      ))} */}

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {fruits.map((fruitObj) => {
          const { name, description, season } = fruitObj;
          return <Card name={name} description={description} season={season} />;
        })}
      </div> */}
      <ConditionalRendering />

      {counters.map((counter, i) => (
        <CounterComp value={counter} handleClick={handleClick} index={i} />
      ))}
    </div>
  );
}

export default App;
