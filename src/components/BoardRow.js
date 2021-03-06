import React from "react";
import styled from "styled-components";

import BoardBox from "./BoardBox";

const StyledBoardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BoardRow = ({
  rowNum,
  numCols,
  boxSize,
  lastRow,
  foodLocation,
  snakeLocation,
  obstacleLocation,
}) => {
  const renderCols = () => {
    return [...Array(numCols)].map((_, idx) => {
      let isFood = false;
      let isSnake = false;
      let isObstacle = false;

      if (idx === foodLocation[0] && rowNum === foodLocation[1]) {
        isFood = true;
      }

      if (
        snakeLocation.find(
          (location) => idx === location[0] && rowNum === location[1]
        )
      ) {
        isSnake = true;
      }

      if (
        obstacleLocation.find(
          (location) => idx === location[0] && rowNum === location[1]
        )
      ) {
        isObstacle = true;
      }

      return (
        <BoardBox
          key={`${rowNum}-${idx}`}
          boxSize={boxSize}
          lastCol={idx === numCols - 1 ? true : false}
          lastRow={lastRow}
          isFood={isFood}
          isSnake={isSnake}
          isObstacle={isObstacle}
        />
      );
    });
  };

  return <StyledBoardRow>{renderCols()}</StyledBoardRow>;
};

export default BoardRow;
