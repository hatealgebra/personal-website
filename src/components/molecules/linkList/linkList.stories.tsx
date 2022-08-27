import React from "react";
import LinkList from "./LinkList";

const Template = (args) => <LinkList {...args} />;
export const LinkListExample = Template.bind({});
LinkListExample.args = {
  heading: "Hello",
  linkData: ["link 1", "link 2", "link 3"],
};

export default {
  title: "Molecules/Link list",
  compponent: LinkList,
};
