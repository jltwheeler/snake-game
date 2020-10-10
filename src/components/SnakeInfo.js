import React from "react";
import styled from "styled-components";

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
  gameOver,
  handleResetGame,
}) => {
  let stateBtn, startedLabel;

  if (gameOver) {
    stateBtn = <Button handleClick={handleResetGame} label="reset"></Button>;
    startedLabel = <div>Game Over! Click RESET to play again,</div>;
  } else if (paused) {
    stateBtn = <Button handleClick={updatePause} label="play"></Button>;
  } else {
    stateBtn = <Button handleClick={updatePause} label="pause"></Button>;
  }

  if (!started) {
    startedLabel = <div>Click PLAY to start the game.</div>;
  }

  return (
    <StyledSnakeInfo className="game-info">
      {startedLabel}
      <div>Score: {score}</div>
      {stateBtn}
      <Button label="settings" disabled={started ? true : false} />
    </StyledSnakeInfo>
  );
};

export default SnakeInfo;
