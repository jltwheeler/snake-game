import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

import SnakeSettings from "./SnakeSettings";

describe("Component: SnakeSettings", () => {
  let component, sizes, speeds;
  beforeEach(() => {
    const mockHandler = jest.fn();
    sizes = ["small", "medium", "large"];
    speeds = ["slow", "moderate", "fast"];

    component = render(
      <SnakeSettings
        width={100}
        height={100}
        vimMode={true}
        obstacleMode={false}
        speed={"moderate"}
        gridSize={"medium"}
        speeds={speeds}
        sizes={sizes}
        handleClickSettings={mockHandler}
        handleChangeVimMode={mockHandler}
        handleChangeObstacleMode={mockHandler}
        handleChangeSpeed={mockHandler}
        handleChangeGridSize={mockHandler}
      />
    );
  });

  test("should render heading correctly", () => {
    const heading = component.container.querySelector("h2");

    expect(heading).toHaveTextContent("Settings");
  });

  test("should render button correctly", () => {
    const button = component.container.querySelector("button");

    expect(button).toHaveTextContent("save settings");
  });

  test("should render 3 speed radio buttons", () => {
    const speedControls = component.container.querySelectorAll(
      ".control-speed"
    );

    expect(speedControls.length).toEqual(speeds.length);
  });

  test("should render 3 size radio buttons", () => {
    const sizeControls = component.container.querySelectorAll(
      ".control-gridsize"
    );

    expect(sizeControls.length).toEqual(sizes.length);
  });
});
