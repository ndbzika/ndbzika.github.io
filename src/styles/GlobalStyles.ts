import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import theme from "./theme";

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

  @media (max-width: 760px) {
    html {
      background: ${theme.colors.primary};
    }
  }

  body {
    font-family: ${fonts.raleway};
    color: ${theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  h1, p {
    font-family: ${fonts.raleway};
  }

  h2, h3, h4, h5, h6, li {
    font-family: ${fonts.titilliumWeb};
  }


  a,
  button {
    cursor: pointer;
    border: none;
    outline: none;
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
