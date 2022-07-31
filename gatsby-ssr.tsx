import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";

import theme from "./src/components/particles/Theme";
import GlobalStyle from "./src/globalStyle";

export const wrapRootElement = ({ element }, props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider {...props}>{element}</ParallaxProvider>
    </ThemeProvider>
  );
};
