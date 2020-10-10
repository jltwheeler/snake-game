import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const H1 = styled.h1`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 4rem;
  background-image: linear-gradient(to right, lightblue, #357ec7);
  -webkit-background-clip: text;
  color: transparent;
`;

const SnakeHeader = ({ title }) => {
  return (
    <StyledHeader className="header">
      <H1 className="header__text">{title}</H1>
    </StyledHeader>
  );
};

export default SnakeHeader;
