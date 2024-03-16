import { createGlobalStyle } from "styled-components";
import "@fontsource/jura";
import theme from "./theme";
import fonts from "./fonts";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: ${theme.colors.background};
  }

  body {
    font-family: ${fonts.jura};
  }

  a,
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.text};
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
