import React from "react";
import LinkList from "./LinkList";

const Template = (args) => (
  <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
    <LinkList {...args} />
  </div>
);
export const LinkListExample = Template.bind({});
LinkListExample.args = {
  heading: "Hello",
  linkData: ["link 1", "link 2", "link 3"],
};

export default {
  title: "Molecules/Link list",
  compponent: LinkList,
};
