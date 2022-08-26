import React from "react";
import MobileMenu from "./MobileMenu";

export const MobileMenuExample = () => (
  <MobileMenu isOpen close={() => console.log("first")} />
);

export default {
  title: "Molecules/Mobile Menu",
  component: MobileMenu,
};
