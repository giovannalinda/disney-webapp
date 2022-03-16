import { createGlobalStyle } from 'styled-components'
import { theme } from 'config'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.backgroundColor};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${(props) => props.theme.textColor};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.black};
    background: ${theme.colors.neutral[100]};
  }
`
