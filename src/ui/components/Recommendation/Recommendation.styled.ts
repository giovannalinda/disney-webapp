import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${theme.grid.header};

  img {
    height: 350px;
    width: 1000px;
    border-radius: 5px;
    margin: 30px 30px 0 200px;
    transition: 0.5s;

    @media (max-width: 920px) {
      width: 350px;
      height: 200px;
    }

    :hover {
      border: 2px solid ${theme.colors.white};
    }
  }
`
