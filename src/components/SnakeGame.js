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
  width: ${(props) => props.width * 1.2}px;
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
  const [paused, setPause] = useState(true);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [foodLocation, setFoodLocation] = useState([]);
  const [snakeLocation, setSnakeLocation] = useState([]);
  const [snakeDirection, setSnakeDirection] = useState("down");

  const updateScore = () => {
    setScore(score + 1);
  };

  const updatePause = (event) => {
    event.preventDefault();

    if (!started) {
      setStarted(true);
      setFoodLocation(generateRandLoc());
      setSnakeLocation([[Math.round(numCols / 2), 1]]);
    }
    setPause(!paused);
  };

  const handleResetGame = (event) => {
    event.preventDefault();
    setFoodLocation(generateRandLoc());
    setSnakeLocation([[Math.round(numCols / 2), 1]]);
    setSnakeDirection("down");
    setPause(!paused);
    setGameOver(!gameOver);
    setStarted(true);
    setScore(0);
  };

  return (
    <StyledSnakeGame width={width} className="game-container">
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
        updateStarted={setStarted}
        generateRandLoc={generateRandLoc}
      />
      <SnakeInfo
        started={started}
        score={score}
        updatePause={updatePause}
        paused={paused}
        gameOver={gameOver}
        handleResetGame={handleResetGame}
      />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
