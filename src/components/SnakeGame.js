import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";

import SnakeHeader from "./SnakeHeader";
import SnakeGrid from "./SnakeGrid";
import SnakeInfo from "./SnakeInfo";
import SnakeSettings from "./SnakeSettings";
import { generateObstacles, generateRandFoodLoc } from "../utils/utils";

const StyledSnakeGame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
  width: ${(props) => props.width * 1.2}px;
  box-shadow: 0 1.25rem 2rem rgba(0, 0, 0, 0.6);
  border-radius: 4rem;
`;

const SnakeGame = ({ width, height }) => {
  // Settings state
  const [inSettings, setInSettings] = useState(false);
  const [vimMode, setVimMode] = useState(false);
  const [obstacleMode, setObstacleMode] = useState(false);
  const [speed, setSpeed] = useState("moderate");
  const [gridSize, setGridSize] = useState("medium");

  let boxSize, timeoutTime;
  const sizes = ["small", "medium", "large"];
  const speeds = ["slow", "moderate", "fast"];

  if (gridSize === sizes[0]) {
    boxSize = 15;
  } else if (gridSize === sizes[1]) {
    boxSize = 25;
  } else if (gridSize === sizes[2]) {
    boxSize = 40;
  } else {
    boxSize = 25;
  }

  if (speed === speeds[0]) {
    timeoutTime = 110;
  } else if (speed === speeds[1]) {
    timeoutTime = 80;
  } else if (speed === speeds[2]) {
    timeoutTime = 40;
  } else {
    timeoutTime = 80;
  }

  const numRows = Math.floor(height / boxSize);
  const numCols = Math.floor(width / boxSize);

  // Game playing state
  const [score, setScore] = useState(0);
  const [paused, setPause] = useState(true);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Snake specific state
  const [foodLocation, setFoodLocation] = useState([]);
  const [snakeLocation, setSnakeLocation] = useState([]);
  const [snakeDirection, setSnakeDirection] = useState("down");
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    const gameSettingsJSON = window.localStorage.getItem("gameSettings");

    if (gameSettingsJSON) {
      const gameSettings = JSON.parse(gameSettingsJSON);
      setVimMode(gameSettings.vimMode);
      setObstacleMode(gameSettings.obstacleMode);
      setSpeed(gameSettings.speed);
      setGridSize(gameSettings.gridSize);
    }
  }, []);

  const updateScore = () => {
    setScore(score + 1);
  };

  const updatePause = (event) => {
    event.preventDefault();

    if (!started) {
      setStarted(true);
      setSnakeLocation([[Math.round(numCols / 2), 1]]);
      if (obstacleMode) {
        setObstacles(generateObstacles(numCols, numRows));
      } else {
        setObstacles([]);
      }
    }
    setPause(!paused);
  };

  useEffect(() => {
    if (started) {
      setFoodLocation(generateRandFoodLoc(numCols, numRows, obstacles));
    }
  }, [obstacles, numCols, numRows, started]);

  const handleResetGame = (event) => {
    event.preventDefault();
    if (obstacleMode) {
      setObstacles(generateObstacles(numCols, numRows));
    } else {
      setObstacles([]);
    }
    setSnakeLocation([[Math.round(numCols / 2), 1]]);
    setSnakeDirection("down");
    setPause(!paused);
    setGameOver(!gameOver);
    setStarted(true);
    setScore(0);
  };

  const handleClickSettings = (event) => {
    event.preventDefault();
    window.localStorage.setItem(
      "gameSettings",
      JSON.stringify({
        vimMode,
        obstacleMode,
        speed,
        gridSize,
      })
    );
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
          speeds={speeds}
          sizes={sizes}
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
          obstacles={obstacles}
          score={score}
          updateScore={updateScore}
          snakeDirection={snakeDirection}
          vimMode={vimMode}
          obstacleMode={obstacleMode}
          timeoutTime={timeoutTime}
          updatePause={setPause}
          updateGameOver={setGameOver}
          updateFoodLocation={setFoodLocation}
          updateSnakeLocation={setSnakeLocation}
          updateSnakeDirection={setSnakeDirection}
          updateStarted={setStarted}
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
