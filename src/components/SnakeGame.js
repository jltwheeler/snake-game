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
  const [inSettings, setInSettings] = useState(true);

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
    setInSettings(true);
  };

  let mainComponent;
  if (inSettings) {
    mainComponent = <SnakeSettings width={width} height={height} />;
  } else {
    mainComponent = (
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
    );
  }

  return (
    <StylesProvider injectFirst>
      <StyledSnakeGame width={width} className="game-container">
        <SnakeHeader title="snake game" />
        {mainComponent}
        <SnakeInfo
          started={started}
          score={score}
          updatePause={updatePause}
          paused={paused}
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
