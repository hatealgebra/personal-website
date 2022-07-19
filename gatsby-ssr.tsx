import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapRootElement = ({ element }, props) => {
  return <ParallaxProvider {...props}>{element}</ParallaxProvider>;
};
