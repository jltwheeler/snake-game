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
  width: 60%;
`;

const SnakeGame = ({ width, height, boxSize }) => {
  const numRows = Math.floor(height / boxSize);
  const numCols = Math.floor(width / boxSize);
  const generateRandLoc = () => {
    return [
      Math.floor(Math.random() * numCols),
      Math.floor(Math.random() * numRows),
    ];
  };

  const [score, setScore] = useState(0);
  const [paused, setPause] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [foodLocation, setFoodLocation] = useState(generateRandLoc());
  const [snakeLocation, setSnakeLocation] = useState([
    [Math.round(numCols / 2), 1],
  ]);
  const [snakeDirection, setSnakeDirection] = useState("down");

  const updateScore = () => {
    setScore(score + 1);
  };

  const updatePause = (event) => {
    event.preventDefault();
    setPause(!paused);
  };

  const handleGameOver = (event) => {
    event.preventDefault();
    setFoodLocation(generateRandLoc());
    setSnakeLocation([[Math.round(numCols / 2), 1]]);
    setSnakeDirection("down");
    setPause(!paused);
    setGameOver(!gameOver);
    setScore(0);
  };

  return (
    <StyledSnakeGame className="game-container">
      <SnakeHeader title="snake game" />
      <SnakeGrid
        width={width}
        height={height}
        boxSize={boxSize}
        numCols={numCols}
        numRows={numRows}
        paused={paused}
        gameOver={gameOver}
        foodLocation={foodLocation}
        snakeLocation={snakeLocation}
        updateScore={updateScore}
        snakeDirection={snakeDirection}
        updatePause={setPause}
        updateGameOver={setGameOver}
        updateFoodLocation={setFoodLocation}
        updateSnakeLocation={setSnakeLocation}
        updateSnakeDirection={setSnakeDirection}
        generateRandLoc={generateRandLoc}
      />
      <SnakeInfo
        score={score}
        updatePause={updatePause}
        paused={paused}
        gameOver={gameOver}
        handleGameOver={handleGameOver}
      />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
