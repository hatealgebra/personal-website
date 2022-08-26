import React from "react";

import ExpandItem from "./ExpandItem";

export const ExpandItemExample = () => (
  <ExpandItem name="Expand item" borders="both" number="01">
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
    <span>Span Item</span>
  </ExpandItem>
);

export default {
  title: "Molecules/Expandable Item",
  component: ExpandItem,
};
