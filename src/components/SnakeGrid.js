import React, { useState } from "react";
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
    Math.floor(Math.random() * numRows),
    Math.floor(Math.random() * numRows),
  ]);

  const renderRows = () => {
    return [...Array(numRows)].map((_, idx) => {
      return (
        <BoardRow
          key={idx}
          boxSize={boxSize}
          numCols={numCols}
          lastRow={idx === numRows - 1 ? true : false}
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
