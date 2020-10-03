import React, { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import SnakeBoard from "./SnakeBoard";
import SnakeInfo from "./SnakeInfo";

const StyledSnakeGame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
`;

const SnakeGame = ({ width, height, boxSize }) => {
  const [score, setScore] = useState(0);

  return (
    <StyledSnakeGame className="game-container">
      <Header title="snake game" />
      <SnakeBoard width={width} height={height} boxSize={boxSize} />
      <SnakeInfo score={score} />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
