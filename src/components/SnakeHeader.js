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
  font-size: 3rem;
`;

const SnakeHeader = ({ title }) => {
  return (
    <StyledHeader className="header">
      <H1 className="header__text">{title}</H1>
    </StyledHeader>
  );
};

export default SnakeHeader;
