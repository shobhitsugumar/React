import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  const addValue = () => {
    /*if (count === 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }*/

    setCount(Math.min(20, count + 1));
  };

  const removeValue = () => {
    /*if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }*/
    setCount(Math.max(0, count - 1));
  };

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter:{count}</h2>
      <button onClick={addValue}>AddValue</button>
      <button onClick={removeValue}>RemoveValue</button>
    </>
  );
}

export default App;
