import React, { useState } from "react";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";

import SnakeHeader from "./SnakeHeader";
import SnakeGrid from "./SnakeGrid";
import SnakeInfo from "./SnakeInfo";
import SnakeSettings from "./SnakeSettings";

const StyledSnakeGame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
  width: ${(props) => props.width * 1.2}px;
  box-shadow: 0 1.25rem 2rem rgba(0, 0, 0, 0.6);
  border-radius: 4rem;
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

  // Game playing state
  const [score, setScore] = useState(0);
  const [paused, setPause] = useState(true);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Settings state
  const [inSettings, setInSettings] = useState(false);
  const [vimMode, setVimMode] = useState(false);
  const [obstacleMode, setObstacleMode] = useState(false);
  const [speed, setSpeed] = useState("moderate");
  const [gridSize, setGridSize] = useState("medium");

  // Snake specific state
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

  const handleClickSettings = (event) => {
    event.preventDefault();
    setInSettings(!inSettings);
  };

  const handleChangeVimMode = (event) => {
    setVimMode(event.target.checked);
  };

  const handleChangeObstacleMode = (event) => {
    setObstacleMode(event.target.checked);
  };

  const handleChangeSpeed = (event) => {
    setSpeed(event.target.value);
  };

  const handleChangeGridSize = (event) => {
    setGridSize(event.target.value);
  };

  const renderMainComponent = () => {
    if (inSettings) {
      return (
        <SnakeSettings
          width={width}
          height={height}
          vimMode={vimMode}
          obstacleMode={obstacleMode}
          speed={speed}
          gridSize={gridSize}
          handleClickSettings={handleClickSettings}
          handleChangeVimMode={handleChangeVimMode}
          handleChangeObstacleMode={handleChangeObstacleMode}
          handleChangeSpeed={handleChangeSpeed}
          handleChangeGridSize={handleChangeGridSize}
        />
      );
    } else {
      return (
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
          vimMode={vimMode}
          obstacleMode={obstacleMode}
          speed={speed}
          gridSize={gridSize}
          updatePause={setPause}
          updateGameOver={setGameOver}
          updateFoodLocation={setFoodLocation}
          updateSnakeLocation={setSnakeLocation}
          updateSnakeDirection={setSnakeDirection}
          updateStarted={setStarted}
          generateRandLoc={generateRandLoc}
        />
      );
    }
  };

  return (
    <StylesProvider injectFirst>
      <StyledSnakeGame width={width} className="game-container">
        <SnakeHeader title="snake game" />
        {renderMainComponent()}
        <SnakeInfo
          started={started}
          score={score}
          updatePause={updatePause}
          paused={paused}
          vimMode={vimMode}
          gameOver={gameOver}
          inSettings={inSettings}
          handleResetGame={handleResetGame}
          handleClickSettings={handleClickSettings}
        />
      </StyledSnakeGame>
    </StylesProvider>
  );
};

export default SnakeGame;
