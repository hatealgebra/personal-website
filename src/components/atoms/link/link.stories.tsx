import React from "react";
import { ComponentStory } from "@storybook/react";

import Link, { NavLink, PageLink } from "./link.styled";

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkExample = Template.bind({});
LinkExample.args = {
  children: "Link text",
};

export const NavigationVariant = () => <NavLink>Text</NavLink>;
export const PageVariant = () => <PageLink>Text</PageLink>;

export default {
  title: "Atoms/Link",
  component: Link,
  subcomponents: { NavLink, PageLink },
};
