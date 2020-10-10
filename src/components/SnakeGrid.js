import React, { useEffect } from "react";
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

const SnakeGrid = ({
  width,
  height,
  boxSize,
  numCols,
  numRows,
  paused,
  gameOver,
  foodLocation,
  snakeLocation,
  updateScore,
  snakeDirection,
  updatePause,
  updateGameOver,
  updateFoodLocation,
  updateSnakeLocation,
  updateSnakeDirection,
  generateRandLoc,
}) => {
  const arraysEqual = (firstArr, secondArr) => {
    if (firstArr.length !== secondArr.length) {
      return false;
    }

    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) return false;
    }

    return true;
  };

  const handleKeyDown = (event) => {
    if (!paused) {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();

          if (snakeDirection !== "right") {
            updateSnakeDirection("left");
          }
          break;
        case 38:
          event.preventDefault();

          if (snakeDirection !== "down") {
            updateSnakeDirection("up");
          }
          break;
        case 39:
          event.preventDefault();

          if (snakeDirection !== "left") {
            updateSnakeDirection("right");
          }
          break;
        case 40:
          event.preventDefault();

          if (snakeDirection !== "up") {
            updateSnakeDirection("down");
          }
          break;
        default:
        // pass
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const updateGameState = () => {
      updatePause(true);
      updateGameOver(!gameOver);
    };

    const timeout = setTimeout(() => {
      if (!paused) {
        const newHeadLocation = [...snakeLocation[0]];

        switch (snakeDirection) {
          case "left":
            if (newHeadLocation[0] - 1 < 0) {
              updateGameState();
            } else {
              newHeadLocation[0] -= 1;
            }
            break;
          case "up":
            if (newHeadLocation[1] - 1 < 0) {
              updateGameState();
            } else {
              newHeadLocation[1] -= 1;
            }
            break;
          case "right":
            if (newHeadLocation[0] + 1 > numCols - 1) {
              updateGameState();
            } else {
              newHeadLocation[0] += 1;
            }
            break;
          case "down":
            if (newHeadLocation[1] + 1 > numRows - 1) {
              updateGameState();
            } else {
              newHeadLocation[1] += 1;
            }
            break;
          default:
          // pass
        }

        const newSnakeLocation = [...snakeLocation];

        if (arraysEqual(newHeadLocation, foodLocation)) {
          console.log(newHeadLocation, foodLocation);
          // Snake eats the food
          updateSnakeLocation([newHeadLocation].concat(newSnakeLocation));
          updateFoodLocation(generateRandLoc());
          updateScore();
        } else {
          // keep moving the snake
          newSnakeLocation.pop();
          updateSnakeLocation([newHeadLocation].concat(newSnakeLocation));
        }
      }
    }, 80);

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
