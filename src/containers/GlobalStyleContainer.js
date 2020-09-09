import { createGlobalStyle } from '@xstyled/emotion'

const GlobalStyleContainer = createGlobalStyle`
  ::selection {
    color: #fff;
    background: #3380CC;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body {
    color: text;
    background-color: background;
    /* transition: all 0.2s ease-in-out; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,h2,h3,h4,h5,h6 {
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
    font-family: inherit;
    font-size: 1em;
    border-width: 2px;
    border-style: solid;
    border-color: border;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    outline: none;
    &:focus {
      border-color: primary;
    }
    &:disabled {
      color: textDisabled;
    }
  }

  pre, code {
    font-family: 'Inconsolata', monospace;
    margin: 0;
  }

  img[src=''], img:not([src]) {
    opacity: 0;
  }
`

export default GlobalStyleContainer
