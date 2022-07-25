import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Preloader from "./src/components/particles/Preloader";

export const wrapRootElement = ({ element }, props) => {
  return <ParallaxProvider {...props}>{element}</ParallaxProvider>;
};
