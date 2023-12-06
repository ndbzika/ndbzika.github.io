"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import { ReactNode } from "react";
import { Header } from "@/components/Header";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
