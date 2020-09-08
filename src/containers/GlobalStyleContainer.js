import { createGlobalStyle } from '@xstyled/emotion'

const GlobalStyleContainer = createGlobalStyle`
  ::selection {
    color: #fff;
    background: #3380CC;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  body {
    color: text;
    background-color: background;
    transition: all 0.2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Inter', sans-serif;
    line-height: 1.2em;
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
    font-family: 'Inter', sans-serif;
    font-size: 1em;
    border-width: 2px;
    border-style: solid;
    border-color: border;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:focus {
      outline-color: primary;
    }
    &:disabled {
      color: textDisabled;
    }
  }

  pre, code {
    font-family: 'Inconsolata', monospace;
  }

  img[src=''], img:not([src]) {
    opacity: 0;
  }
`

export default GlobalStyleContainer
