import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/react/dont-cleanup-after-each";

import React from "react";
import { setupTest } from "../../../utils/test.utils";
import { ExpandItemExample } from "./expandItem.stories";

describe("interactivity of the item", () => {
  const { getByRole, getByTestId } = screen;
  setupTest(<ExpandItemExample />);
  test("expand content", async () => {
    userEvent.click(getByRole("button"));
    await waitFor(() =>
      expect(getByTestId("expand-item")).toHaveStyle({ "max-height": "auto" })
    );
  });
  test("hide content", async () => {
    userEvent.click(getByRole("button"));
    await waitFor(() =>
      expect(getByTestId("expand-item")).toHaveStyle({ "max-height": 0 })
    );
  });
});
