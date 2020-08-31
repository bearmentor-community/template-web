import { createGlobalStyle } from '@xstyled/emotion'

const GlobalStyleContainer = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    color: text;
    background-color: background;
    transition: all 0.2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, ul, ol {
    margin: 1rem 0;
    a {
      color: primary;
      &:hover {
        color: primaryAlt;
      }
    }
  }

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:focus {
      outline-color: primary;
    }
  }

  input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    border-width: 2px;
    border-style: solid;
    border-color: border;
    border-radius: 5;
    transition: all 0.2s ease-in-out;
    &:focus {
      outline-color: primary;
    }
    &:disabled {
      color: textDisabled;
    }
  }
`

export default GlobalStyleContainer
