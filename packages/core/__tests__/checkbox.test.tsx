import React from "react";
import Checkbox from "../checkbox/checkbox";
import { render, screen } from "@testing-library/react";

describe("Checkbox", () => {
  it("should be checked", () => {
    render(<Checkbox checked aria-label="orange" />);

    expect(screen.getByTestId("input")).toBeChecked();
  });

  it("should be in readOnly", () => {
    render(<Checkbox readOnly aria-label="orange" />);

    expect(screen.getByTestId("input")).toHaveAttribute(
      "aria-readonly",
      "true"
    );
  });

  it("should be disabled", () => {
    render(<Checkbox disabled aria-label="orange" />);

    expect(screen.getByTestId("input")).toBeDisabled();
  });

  it("should be required", () => {
    render(<Checkbox required aria-label="orange" />);

    expect(screen.getByTestId("input")).toHaveAttribute(
      "aria-required",
      "true"
    );
  });

  it("should have an accessible name", () => {
    render(<Checkbox aria-label="orange" />);

    expect(screen.getByTestId("input")).toHaveAccessibleName();
  });

  it("should have a label", () => {
    render(<Checkbox aria-label="orange">Orange</Checkbox>);

    expect(screen.getByTestId("label").textContent).toBe("Orange");
  });

  it("should not have a label if it is not provided", () => {
    render(<Checkbox aria-label="orange"></Checkbox>);

    expect(screen.getByTestId("label").textContent).toBe("");
  });
});
