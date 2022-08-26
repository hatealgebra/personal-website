import React from "react";
import { action } from "@storybook/addon-actions";
import { ComponentStory } from "@storybook/react";

import MenuButton from "./MenuButton";
import Button, { ButtonLink } from "./button.styled";

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});
ButtonExample.args = {
  variant: "primary",
  children: "Button",
};

export const AllButtons = () => (
  <>
    <Button variant="primary">Button</Button>
    <Button variant="secondary">Button</Button>
    <ButtonLink>Button</ButtonLink>
    <MenuButton dispatch={action("Dispatch toogling of mobile menu")} />
  </>
);

export default {
  title: "Atoms/Button",
  component: Button,
  subcomponents: { MenuButton },
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
};
