import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../components/particles/Theme";
import GlobalStyle from "../globalStyle";

export const setupTest = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
