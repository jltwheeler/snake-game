import React from "react";
import styled from "styled-components";

import "./App.css";

import SnakeGame from "./components/SnakeGame";

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const WID = 400;
  const HGT = 500;
  const BOX_SIZE = 25;

  return (
    <div className="App">
      <Flexbox>
        <SnakeGame width={WID} height={HGT} boxSize={BOX_SIZE} />
      </Flexbox>
    </div>
  );
};

export default App;
