import React from "react";
import { ComponentStory } from "@storybook/react";
import LinkList from "./LinkList";
import { LinkListContainer } from "../../organisms/footer/footer.styled";

const Template: ComponentStory<typeof LinkList> = (args) => (
  <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
    <LinkListContainer>
      <LinkList {...args} />
    </LinkListContainer>
  </div>
);
export const LinkListExample = Template.bind({});
LinkListExample.args = {
  heading: "Hello",
  linkData: [
    { name: "Facebook", link: "facebook.com" },
    { name: "Instagram", link: "instagram.com" },
  ],
};

export default {
  title: "Molecules/Link list",
  compponent: LinkList,
};
