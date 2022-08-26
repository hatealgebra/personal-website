import React from "react";

import SwitchMenu from "./SwitchMenu";
import copywriteJSON from "../../../assets/content/copyWrite.json";
import { SwitchMenuButton } from "./switchMenu.styled";
import { ComponentStory } from "@storybook/react";

const Template: ComponentStory<typeof SwitchMenuButton> = (args) => (
  <SwitchMenuButton {...args} />
);

export const SwitchMenuBtn = Template.bind({});
SwitchMenuBtn.args = {
  isClicked: true,
  padding: false,
  children: "Button",
};

export const SwitchMenuStory = () => {
  const hobbyText = copywriteJSON.pages.about.myHobbies;

  const posibilities = Object.keys(hobbyText);
  const [choosenHobby, setChoosenHobby] =
    React.useState<"basketball" | "music" | "movies" | "race sims">(
      "basketball"
    );
  return (
    <SwitchMenu
      menuState={choosenHobby}
      dispatch={setChoosenHobby}
      possibilities={posibilities}
    />
  );
};

export default {
  title: "Molecules/Switch menu",
  component: SwitchMenu,
  subcomponents: { SwitchMenuButton },
};
