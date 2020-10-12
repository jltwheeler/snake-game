import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  background-color: #2c5282;
  border: none;
  padding: 1rem 1.25rem;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #3182ce;
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: grey;
    cursor: default;
  }

  &:disabled:hover {
    transform: scale(1);
  }
`;

const Button = ({ label, handleClick, disabled }) => {
  return (
    <StyledButton onClick={(e) => handleClick(e)} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
