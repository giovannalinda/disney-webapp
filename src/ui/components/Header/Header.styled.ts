import styled from 'styled-components'
import { theme } from 'config'

export const Header = styled.header`
  nav {
    position: fixed;
    width: 100%;
    background: ${theme.colors.gray[700]};
    z-index: 1;
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
