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
    width: 150px;
    height: 80px;
  }
`

export const List = styled.ul`
  text-align: left;
  display: flex;
  align-items: center;

  svg {
    @media (max-width: 920px) {
      margin: 0 10px 0 0px;
    }
  }

  svg,
  a,
  li {
    cursor: pointer;
    transition: 0.5s;
    :hover {
      color: ${theme.colors.gray[400]};
    }
  }

  li {
    display: inline;
    padding: 15px;

    @media (max-width: 920px) {
      display: none;
    }

    a {
      margin: 0 auto;
      color: ${theme.colors.white};
      font-size: 16px;
    }
  }
`
