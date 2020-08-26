import { createGlobalStyle } from '@xstyled/emotion'

const GlobalStyleContainer = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    color: text;
    background-color: background;
    transition: background-color 0.2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, ul, ol {
    font-size: 1.2em;
    line-height: 1.8em;
    margin: 30px 0;
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
    font-family: sans-serif;
    border-width: 2px;
    border-style: solid;
    border-color: border;
    border-radius: 5;
    transition: outline-color 0.2s ease-in-out;
    &:focus {
      outline-color: primary;
    }
  }
`

export default GlobalStyleContainer
