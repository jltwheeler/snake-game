import React, { useState } from "react";
import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";

import Button from "./Button";
import Container from "./Container";

const StyledSettings = styled.div`
  background-color: #333;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 2rem 1rem;
`;

const StyledHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: lightblue;
  text-transform: uppercase;
`;

const SnakeSettings = ({ width, height }) => {
  const [test, setTest] = useState(true);
  const [speed, setSpeed] = useState("moderate");

  const handleChange = (event) => {
    setTest(event.target.checked);
  };

  const handleChangeSpeed = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <Container>
      <StyledSettings width={width} height={height}>
        <StyledHeading>Settings</StyledHeading>
        <Container>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={test}
                    color="primary"
                    onChange={handleChange}
                    name="vim-mode"
                  />
                }
                label="VIM MODE"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={test}
                    color="primary"
                    onChange={handleChange}
                    name="obstacle-mode"
                  />
                }
                label="OBSTACLE MODE"
              />
            </FormGroup>
            <FormLabel>CHOOSE GAME SPEED</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="slow"
                control={<Radio color="primary" />}
                label="SLOW"
                labelPlacement="bottom"
              />{" "}
              <FormControlLabel
                value="moderate"
                control={<Radio color="primary" />}
                label="MODERATE"
                labelPlacement="bottom"
              />{" "}
              <FormControlLabel
                value="fast"
                control={<Radio color="primary" />}
                label="FAST"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <FormLabel>CHOOSE GRID SIZE</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="small"
                control={<Radio color="primary" />}
                label="SMALL"
                labelPlacement="bottom"
              />{" "}
              <FormControlLabel
                value="medium"
                control={<Radio color="primary" />}
                label="MEDIUM"
                labelPlacement="bottom"
              />{" "}
              <FormControlLabel
                value="large"
                control={<Radio color="primary" />}
                label="LARGE"
                labelPlacement="bottom"
              />
            </RadioGroup>{" "}
          </FormControl>
        </Container>
        <Container>
          <Button label="Done" />
        </Container>
      </StyledSettings>
    </Container>
  );
};

export default SnakeSettings;
