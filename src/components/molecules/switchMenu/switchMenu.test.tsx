import React from "react";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { setupTest } from "../../../utils/test.utils";
import { SwitchMenuStory } from "./switchMenu.stories";
import Theme from "../../particles/Theme";

describe("switch menu interactivity", () => {
  beforeEach(() => setupTest(<SwitchMenuStory />));

  test("shows correctly after clicking on one of the options", () => {
    const numberClicked = 2;
    const { getAllByRole } = screen;
    const buttons = getAllByRole("button");
    userEvent.click(buttons[numberClicked]);

    waitFor(() => {
      buttons.map((button, i) => {
        if (i === numberClicked) {
          expect(button).toHaveStyle({ color: Theme.color.black });
        } else {
          expect(button).toHaveStyle({ color: "lightgrey" });
        }
      });
    });
  });
});
