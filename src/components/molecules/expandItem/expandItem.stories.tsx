import React from "react";

import ExpandItem from "./ExpandItem";

export const ExpandItemExample = () => (
  <ExpandItem borders="both" number="01">
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
  </ExpandItem>
);

export default {
  title: "Atoms/Expandable Item",
  component: ExpandItem,
};
