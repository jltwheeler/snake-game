import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BoardRow from "./BoardRow";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const StyledSnakeGrid = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const SnakeGrid = ({ width, height, boxSize }) => {
  const numRows = Math.floor(height / boxSize);
  const numCols = Math.floor(width / boxSize);

  const [foodLocation, setFoodLocation] = useState([
    Math.floor(Math.random() * numCols),
    Math.floor(Math.random() * numRows),
  ]);

  const [snakeLocation, setSnakeLocation] = useState([
    [Math.floor(Math.random() * numCols), Math.floor(Math.random() * numRows)],
  ]);

  const [snakeDirection, setSnakeDirection] = useState("up");

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      setSnakeDirection("left");
    } else
      switch (event.keyCode) {
        case 37:
          setSnakeDirection("left");
          break;
        case 38:
          setSnakeDirection("up");
          break;
        case 39:
          setSnakeDirection("right");
          break;
        case 40:
          setSnakeDirection("down");
      }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, [snakeDirection]);

  const renderRows = () => {
    return [...Array(numRows)].map((_, idx) => {
      return (
        <BoardRow
          key={idx}
          rowNum={idx}
          boxSize={boxSize}
          numCols={numCols}
          lastRow={idx === numRows - 1 ? true : false}
          foodLocation={foodLocation}
          snakeLocation={snakeLocation}
        />
      );
    });
  };

  return (
    <Container>
      <StyledSnakeGrid width={width} height={height}>
        {renderRows()}
      </StyledSnakeGrid>
    </Container>
  );
};

export default SnakeGrid;
