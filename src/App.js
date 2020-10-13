import React from "react";
import styled from "styled-components";

import "./App.css";

import SnakeGame from "./components/SnakeGame";

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  const WID = 400;
  const HGT = 500;

  return (
    <div className="App">
      <Flexbox>
        <SnakeGame width={WID} height={HGT} />
      </Flexbox>
    </div>
  );
};

export default App;
