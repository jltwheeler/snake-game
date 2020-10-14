import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

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

  test("should render component correctly", () => {
    expect(component.container).toHaveTextContent("Settings");
  });
});
