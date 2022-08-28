import React from "react";
import userEvent from "@testing-library/user-event";
import { setupTest } from "../../../utils/test.utils";
import MobileMenu from "./MobileMenu";
import { waitFor } from "@testing-library/dom";

const MobilMenuContainerTest = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return <MobileMenu isOpen={isOpen} close={() => setIsOpen(false)} />;
};

describe("Mobile menu interactivity", () => {
  test("Mobile menu close", async () => {
    const { getByRole, getByTestId } = setupTest(<MobilMenuContainerTest />);
    userEvent.click(getByRole("button"));
    await waitFor(() => {
      expect(getByTestId("mobile-menu__container")).toHaveStyle({
        height: "0%",
        "z-index": -1,
      });
    });
  });
});
