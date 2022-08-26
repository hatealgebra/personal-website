import React from "react";
import userEvent from "@testing-library/user-event";

import { setupTest } from "../../../utils/test.utils";
import Button, { ButtonLink } from "./button.styled";
import { waitFor } from "@testing-library/dom";
import MenuButton from "./MenuButton";

describe("different buttons functin called", () => {
  test("normal button click", () => {
    const mockFn = jest.fn();
    const { getByRole } = setupTest(
      <Button variant="primary" onClick={mockFn}>
        Button
      </Button>
    );
    userEvent.click(getByRole("button"));
    waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
  test("link button click", () => {
    const mockFn = jest.fn();
    const { getByRole } = setupTest(
      <ButtonLink onClick={mockFn}>Button</ButtonLink>
    );
    userEvent.click(getByRole("button"));
    waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
  test("menu button click", () => {
    const mockFn = jest.fn();
    const { getByRole } = setupTest(<MenuButton dispatch={mockFn} />);
    userEvent.click(getByRole("button"));
    waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
