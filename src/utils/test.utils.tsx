import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../components/particles/Theme";
import GlobalStyle from "../globalStyle";
// @ts-ignore: InternalProvider
import TransitionLinkProvider from "gatsby-plugin-transition-link/context/InternalProvider";
import { LocationProvider } from "@reach/router";

// TODO: Uncomment and fix ts warnings

export const setupTest = (children: React.ReactNode) => {
  // @ts-ignore: queryMedia
  window.matchMedia = () => true;
  return render(
    <LocationProvider>
      <TransitionLinkProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </TransitionLinkProvider>
    </LocationProvider>
  );
};
