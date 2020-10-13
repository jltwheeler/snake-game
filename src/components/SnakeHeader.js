import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 4rem;
`;

const SnakeHeader = ({ title }) => {
  return (
    <StyledHeader className="header">
      <H1 className="header__text">
        <Emoji text=":snake:" />
        {title}
        <Emoji text=":snake:" />
      </H1>
    </StyledHeader>
  );
};

export default SnakeHeader;
