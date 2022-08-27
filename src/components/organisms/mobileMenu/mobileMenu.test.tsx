import React from "react";
import userEvent from "@testing-library/user-event";
import { setupTest } from "../../../utils/test.utils";
import MobileMenu from "./MobileMenu";
import { screen, waitFor } from "@testing-library/dom";
import { MobileMenuExample } from "./mobileMenu.stories";

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

// describe("Mobile menu location awareness", () => {
//   test("Underline link based on the path", async () => {
//     delete global.window.location;
//     global.window = Object.create(window);
//     global.window.location = {
//       href: "https://pavel-vondra.com",
//       pathname: "about",
//     };
//     const { getAllByRole } = setupTest(<MobileMenuExample />);
//     waitFor(() => {
//       getAllByRole("link").map((link) =>
//         expect(link).toHaveStyle({ "text-decoration": "none" })
//       );
//     });
//   });
// });
