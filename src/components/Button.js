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

  &:disabled {
    background-color: grey;
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
