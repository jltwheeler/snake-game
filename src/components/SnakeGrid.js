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

const SnakeGrid = ({ width, height, boxSize, paused, updateScore }) => {
  const numRows = Math.floor(height / boxSize);
  const numCols = Math.floor(width / boxSize);

  const generateRandLoc = () => {
    return [
      Math.floor(Math.random() * numCols),
      Math.floor(Math.random() * numRows),
    ];
  };

  const arraysEqual = (firstArr, secondArr) => {
    if (firstArr.length !== secondArr.length) {
      return false;
    }

    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) return false;
    }

    return true;
  };

  const [foodLocation, setFoodLocation] = useState(generateRandLoc());
  const [snakeLocation, setSnakeLocation] = useState([generateRandLoc()]);
  const [snakeDirection, setSnakeDirection] = useState("up");

  const handleKeyDown = (event) => {
    if (!paused) {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          setSnakeDirection("left");
          break;
        case 38:
          event.preventDefault();
          setSnakeDirection("up");
          break;
        case 39:
          event.preventDefault();
          setSnakeDirection("right");
          break;
        case 40:
          event.preventDefault();
          setSnakeDirection("down");
      }
    }
  };

  useEffect(() => {
    if (!paused) {
      document.addEventListener("keydown", handleKeyDown);
    }
  }, [snakeDirection]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!paused) {
        const newHeadLocation = [...snakeLocation[0]];

        switch (snakeDirection) {
          case "left":
            newHeadLocation[0] -= 1;
            break;
          case "up":
            newHeadLocation[1] -= 1;
            break;
          case "right":
            newHeadLocation[0] += 1;
            break;
          case "down":
            newHeadLocation[1] += 1;
        }

        const newSnakeLocation = [...snakeLocation];

        if (arraysEqual(newHeadLocation, foodLocation)) {
          // Snake eats the food
          setSnakeLocation([newHeadLocation].concat(newSnakeLocation));
          setFoodLocation(generateRandLoc());
          updateScore();
        } else {
          // keep moving the snake
          newSnakeLocation.pop();
          setSnakeLocation([newHeadLocation].concat(newSnakeLocation));
        }
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  });

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
