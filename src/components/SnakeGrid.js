import React, { useEffect } from "react";
import styled from "styled-components";

import BoardRow from "./BoardRow";
import Container from "./Container";
import { generateRandFoodLoc, arraysEqual } from "../utils/utils";

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
  obstacles,
  score,
  updateScore,
  snakeDirection,
  vimMode,
  obstacleMode,
  timeoutTime,
  updatePause,
  updateGameOver,
  updateFoodLocation,
  updateSnakeLocation,
  updateSnakeDirection,
  updateStarted,
}) => {
  const handleKeyDown = (event) => {
    if (!paused) {
      switch (event.keyCode) {
        case vimMode ? 72 : 37:
          event.preventDefault();

          if (snakeDirection !== "right") {
            updateSnakeDirection("left");
          }
          break;
        case vimMode ? 75 : 38:
          event.preventDefault();

          if (snakeDirection !== "down") {
            updateSnakeDirection("up");
          }
          break;
        case vimMode ? 76 : 39:
          event.preventDefault();

          if (snakeDirection !== "left") {
            updateSnakeDirection("right");
          }
          break;
        case vimMode ? 74 : 40:
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
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const makeGameOver = () => {
      updatePause(true);
      updateGameOver(!gameOver);
      updateStarted(false);

      const highScore = window.localStorage.getItem("highScore");

      if (highScore) {
        if (score > parseInt(highScore)) {
          window.localStorage.setItem("highScore", score);
        }
      } else {
        window.localStorage.setItem("highScore", toString(score));
      }
    };

    const timeout = setTimeout(() => {
      if (!paused) {
        const newHeadLocation = [...snakeLocation[0]];

        switch (snakeDirection) {
          case "left":
            if (newHeadLocation[0] - 1 < 0) {
              makeGameOver();
              return;
            } else {
              newHeadLocation[0] -= 1;
            }
            break;
          case "up":
            if (newHeadLocation[1] - 1 < 0) {
              makeGameOver();
              return;
            } else {
              newHeadLocation[1] -= 1;
            }
            break;
          case "right":
            if (newHeadLocation[0] + 1 > numCols - 1) {
              makeGameOver();
              return;
            } else {
              newHeadLocation[0] += 1;
            }
            break;
          case "down":
            if (newHeadLocation[1] + 1 > numRows - 1) {
              makeGameOver();
              return;
            } else {
              newHeadLocation[1] += 1;
            }
            break;
          default:
          // pass
        }

        // Check if snake eats itself
        if (snakeLocation.find((item) => arraysEqual(item, newHeadLocation))) {
          makeGameOver();
        }

        // Check if snake hits obstacle
        if (obstacleMode) {
          if (obstacles.find((item) => arraysEqual(item, newHeadLocation))) {
            makeGameOver();
          }
        }

        const newSnakeLocation = [...snakeLocation];

        if (arraysEqual(newHeadLocation, foodLocation)) {
          // Snake eats the food
          updateSnakeLocation([newHeadLocation].concat(newSnakeLocation));
          updateFoodLocation(generateRandFoodLoc(numCols, numRows, obstacles));
          updateScore();
        } else {
          // keep moving the snake
          newSnakeLocation.pop();
          updateSnakeLocation([newHeadLocation].concat(newSnakeLocation));
        }
      }
    }, timeoutTime);

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
          obstacleLocation={obstacles}
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
