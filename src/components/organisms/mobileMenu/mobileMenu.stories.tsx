import { action } from "@storybook/addon-actions";
import React from "react";
import MobileMenu from "./MobileMenu";

export const MobileMenuExample = () => (
  <MobileMenu isOpen close={() => action("Close mobile menu")} />
);

export default {
  title: "Molecules/Mobile Menu",
  component: MobileMenu,
};
