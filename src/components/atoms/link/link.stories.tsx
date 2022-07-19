import React from "react";
import Link, { NavLink, PageLink } from "./link.styled";

export const BasicLink = () => <Link to="/blog">What I Can do</Link>;
export const NavigationLink = () => (
  <NavLink style={{ color: "black" }} to="/blog">
    What I Can do
  </NavLink>
);
export const LinkToPage = () => (
  <PageLink color="black" to="/blog">
    What I Can do
  </PageLink>
);

export default {
  title: "Atoms/Link",
  component: Link,
};
