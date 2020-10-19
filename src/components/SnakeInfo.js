import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";

import Button from "./Button";

const StyledSnakeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;

  & > * {
    margin: 0.5rem 0rem;
  }
`;

const SnakeInfo = ({
  started,
  score,
  updatePause,
  paused,
  vimMode,
  gameOver,
  inSettings,
  handleResetGame,
  handleClickSettings,
}) => {
  let stateBtn, startedLabel;

  const getHighScore = () => {
    const highScore = window.localStorage.getItem("highScore");

    if (highScore) {
      return highScore;
    } else {
      return 0;
    }
  };

  if (gameOver) {
    stateBtn = (
      <Button
        handleClick={handleResetGame}
        label="reset"
        disabled={inSettings ? true : false}
      ></Button>
    );
    startedLabel = <div>Game Over! Click RESET to play again.</div>;
  } else if (paused) {
    startedLabel = <div>Game Paused</div>;
    stateBtn = (
      <Button
        handleClick={updatePause}
        label="play"
        disabled={inSettings ? true : false}
      ></Button>
    );
  } else {
    startedLabel = (
      <div>Game playing in {vimMode ? "Vim mode." : "normal mode"}</div>
    );
    stateBtn = <Button handleClick={updatePause} label="pause"></Button>;
  }

  if (!started) {
    startedLabel = <div>Bad luck, you died. Click PLAY to start the game.</div>;
  }

  return (
    <StyledSnakeInfo inSettings={inSettings} className="game-info">
      {startedLabel}
      <div>
        <Emoji text={`🍖 : ${score} 👑 : ${getHighScore()}`} />
      </div>
      {stateBtn}
      <Button
        label="settings"
        handleClick={handleClickSettings}
        disabled={started || inSettings ? true : false}
      />
    </StyledSnakeInfo>
  );
};

export default SnakeInfo;
