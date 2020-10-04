import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  background-color: orangered;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: red;
    transform: scale(1.05);
  }
`;

const Button = ({ label, handleClick }) => {
  return <StyledButton onClick={(e) => handleClick(e)}>{label}</StyledButton>;
};

export default Button;
