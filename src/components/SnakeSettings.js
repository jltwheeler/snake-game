import React from "react";
import styled from "styled-components";

import Container from "./Container";

const StyledSettings = styled.div`
  background-color: #333;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 2rem 1rem;
`;

const SnakeSettings = ({ width, height }) => {
  return (
    <Container>
      <StyledSettings width={width} height={height}>
        Settings
      </StyledSettings>
    </Container>
  );
};

export default SnakeSettings;
