import React from "react";
import styled from "styled-components";

const StyledBoardBox = styled.div`
  border-top: 1px solid lightblue;
  border-left: 1px solid lightblue;
  border-bottom: ${(props) => (props.lastRow ? "1px" : "0px")} solid lightblue;
  border-right: ${(props) => (props.lastCol ? "1px" : "0px")} solid lightblue;
  width: ${(props) => props.boxSize}px;
  height: ${(props) => props.boxSize}px;
  background-color: ${(props) => {
    if (props.isSnake) {
      return "green";
    } else if (props.isFood) {
      return "orangered";
    } else if (props.isObstacle) {
      return "lightblue";
    } else {
      return "";
    }
  }};
`;

const BoardBox = ({
  boxSize,
  lastRow,
  lastCol,
  isFood,
  isSnake,
  isObstacle,
}) => {
  return (
    <StyledBoardBox
      boxSize={boxSize}
      lastRow={lastRow}
      lastCol={lastCol}
      isFood={isFood}
      isSnake={isSnake}
      isObstacle={isObstacle}
    ></StyledBoardBox>
  );
};

export default BoardBox;
