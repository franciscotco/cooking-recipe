import { type ReactElement, type PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./global-style";
import { THEME } from "./style.theme";

const StyleProvider = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <ThemeProvider theme={THEME}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default StyleProvider;
