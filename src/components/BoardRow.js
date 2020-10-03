import React from "react";
import styled from "styled-components";

import BoardBox from "./BoardBox";

const StyledBoardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const BoardRow = ({ numCols, boxSize, lastRow }) => {
  const renderCols = () => {
    return [...Array(numCols)].map((_, idx) => {
      return (
        <BoardBox
          key={idx}
          boxSize={boxSize}
          lastCol={idx === numCols - 1 ? true : false}
          lastRow={lastRow}
        />
      );
    });
  };

  return <StyledBoardRow>{renderCols()}</StyledBoardRow>;
};

export default BoardRow;
