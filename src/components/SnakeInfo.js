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

const SnakeInfo = ({ score, updatePause, paused }) => {
  return (
    <StyledSnakeInfo className="game-info">
      <div>Score: {score}</div>
      <Button
        label="Pause"
        handleClick={updatePause}
        label={paused ? "play" : "paused"}
      />
    </StyledSnakeInfo>
  );
};

export default SnakeInfo;
