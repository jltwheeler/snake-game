import React from "react";
import "./App.css";

import SnakeGame from "./components/SnakeGame";

const App = () => {
  const WID = 400;
  const HGT = 500;
  const BOX_SIZE = 50;

  return (
    <div className="App">
      <SnakeGame width={WID} height={HGT} boxSize={BOX_SIZE} />
    </div>
  );
};

export default App;
