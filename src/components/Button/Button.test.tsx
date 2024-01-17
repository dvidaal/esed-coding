import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with the text 'Next' on it", () => {
      const buttonText = "Next";
      render(<Button isDisabled={true} text={buttonText} />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
