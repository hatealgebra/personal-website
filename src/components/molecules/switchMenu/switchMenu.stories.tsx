import React from "react";
import SwitchMenu from "./SwitchMenuHobbies";

export const HobbiesMenuStory = (
  <SwitchMenu
    menuState="basketball"
    dispatch={() => console.log("Clicked")}
    possibilities={["Example 1", "Example 2"]}
  />
);

export default {
  title: "Molecules/Hobbie Menu",
  component: SwitchMenu,
};
