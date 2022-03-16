import styled from 'styled-components'
import { theme } from 'config'

export const Header = styled.header`
  position: fixed;
  height: ${theme.grid.header};
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;

  nav {
    background: ${({ theme }) => theme.headerBackgroundColor};
    box-shadow: 0 0.1px 0.5px ${theme.colors.gray[700]};
  }

  img {
    width: 120px;
    height: 70px;
  }
`

export const List = styled.ul`
  text-align: left;
  display: flex;
  align-items: center;

  svg {
    @media (max-width: 920px) {
      margin: 0 10px 0 10px;
    }
  }
  svg,
  a,
  li {
    cursor: pointer;
  }

  li {
    display: inline;
    padding: 15px;

    @media (max-width: 920px) {
      display: none;
    }

    a {
      margin: 0 auto;
      color: ${({ theme }) => theme.textColor};
      font-size: 16px;
    }
  }

  button {
    font-size: 16px;
    background: transparent;
    border: none;
    margin-left: 90px;

    svg {
      color: ${theme.colors.yellow[300]};
    }
  }
`
