import React from "react";
import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Switch from "@material-ui/core/Switch";

import Button from "./Button";
import Container from "./Container";

const StyledSettings = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const StyledHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #cbd5e0;
  text-transform: uppercase;
`;

const StyledLabel = styled(FormLabel)`
  color: #cbd5e0;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0.75rem 0;
`;

const StyledFormGroup = styled(FormGroup)`
  margin: 0.75rem 0;
`;

const SnakeSettings = ({
  width,
  height,
  vimMode,
  obstacleMode,
  speed,
  gridSize,
  speeds,
  sizes,
  handleClickSettings,
  handleChangeVimMode,
  handleChangeObstacleMode,
  handleChangeSpeed,
  handleChangeGridSize,
}) => {
  const renderRadioButtons = (items, handleChange, value) => {
    const renderRadios = () =>
      items.map((item) => {
        return (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio color="primary" />}
            label={<StyledLabel>{item}</StyledLabel>}
            labelPlacement="bottom"
          />
        );
      });

    return (
      <RadioGroup
        row
        aria-label="position"
        name="position"
        onChange={handleChange}
        value={value}
      >
        {renderRadios()}
      </RadioGroup>
    );
  };

  return (
    <Container>
      <StyledSettings width={width} height={height}>
        <StyledHeading>Settings</StyledHeading>
        <Container>
          <FormControl style={{ padding: "1rem" }} component="fieldset">
            <StyledFormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={vimMode}
                    color="primary"
                    onChange={handleChangeVimMode}
                    name="vim-mode"
                  />
                }
                label={<StyledLabel>vim mode</StyledLabel>}
              />
            </StyledFormGroup>
            <StyledFormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={obstacleMode}
                    color="primary"
                    onChange={handleChangeObstacleMode}
                    name="obstacle-mode"
                  />
                }
                label={<StyledLabel>obstacle mode</StyledLabel>}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>choose game speed</StyledLabel>
              {renderRadioButtons(speeds, handleChangeSpeed, speed)}
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>choose grid size</StyledLabel>
              {renderRadioButtons(sizes, handleChangeGridSize, gridSize)}
            </StyledFormGroup>
          </FormControl>
        </Container>
        <Container>
          <Button label="save settings" handleClick={handleClickSettings} />
        </Container>
      </StyledSettings>
    </Container>
  );
};

export default SnakeSettings;
