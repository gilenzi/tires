// GlobalStyles.ts
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Light theme default */
  html {
    background-color: #ffffff;
    color: #1f2023;
  }

  /* Dark theme via manual toggle */
  html[data-theme="dark"] {
    background-color: #1f2023 !important;
    color: #dadada !important;

    & body{
        background-color: #1f2023 !important;
        color: #dadada !important;
    }
    
  }

  /* Light theme via manual toggle */
  html[data-theme="light"] {
    background-color: #ffffff !important;
    color: #1f2023 !important;

    & body{
        background-color: #ffffff !important;
        color: #1f2023 !important;
    }
  }

  /* Fallback to system preference if no data-theme is set */
  @media (prefers-color-scheme: dark) {
    html:not([data-theme="light"]) {
      background-color: #1f2023;
      color: #dadada;
    }
  }

`;

export default GlobalStyles;
