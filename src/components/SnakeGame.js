import React, { useState } from "react";
import styled from "styled-components";

import SnakeHeader from "./SnakeHeader";
import SnakeGrid from "./SnakeGrid";
import SnakeInfo from "./SnakeInfo";

const StyledSnakeGame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
`;

const SnakeGame = ({ width, height, boxSize }) => {
  const [score, setScore] = useState(0);
  const [paused, setPause] = useState(false);

  const updateScore = () => {
    setScore(score + 1);
  };

  const updatePause = (event) => {
    event.preventDefault();
    setPause(!paused);
  };

  return (
    <StyledSnakeGame className="game-container">
      <SnakeHeader title="snake game" />
      <SnakeGrid
        width={width}
        height={height}
        boxSize={boxSize}
        paused={paused}
        updateScore={updateScore}
      />
      <SnakeInfo score={score} updatePause={updatePause} paused={paused} />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
