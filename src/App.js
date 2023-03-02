import React, { useState, Component } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const increase = () => {
    return setValue(value + 1);
  };

  return (
    <div>
      <span className="value">{value}</span>
      <button id="inc" onClick={increase}>
        Incrementa
      </button>
    </div>
  );
}

export default App;
