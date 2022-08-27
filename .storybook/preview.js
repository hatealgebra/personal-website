import { action } from "@storybook/addon-actions";
import { addDecorator } from "@storybook/react";
import { ParallaxProvider } from "react-scroll-parallax";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../src/components/particles/Theme";
import TransitionLinkProvider from "gatsby-plugin-transition-link/context/InternalProvider";
import { LocationProvider } from "@reach/router";

import GlobalStyle from "../src/globalStyle";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const Flex = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

addDecorator((storyFn) => {
  // TransitionLinkProvider and global function matchMedia added, because the AniLink was throwing undefined error in storybook
  window.matchMedia = () => true;
  return (
    <LocationProvider>
      <TransitionLinkProvider>
        <ThemeProvider theme={Theme}>
          <Flex>
            <GlobalStyle />
            <ParallaxProvider>{storyFn()}</ParallaxProvider>
          </Flex>
        </ThemeProvider>
      </TransitionLinkProvider>
    </LocationProvider>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
