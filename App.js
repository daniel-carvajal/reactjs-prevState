import React, { useState } from "react";

let DUMMY_EXPENSES = [{}, {}, {}];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [counter, setCounter] = useState(0);

  const handleArrayUpdate = () => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  const handleCounterUpdate = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  return <div className="App"></div>;
}

export default App;
