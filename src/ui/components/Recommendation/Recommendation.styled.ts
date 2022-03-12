import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${theme.grid.header};
  object-fit: cover;

  img {
    height: 350px;
    width: 860px;
    border-radius: 5px;
    margin: 30px 0 0 30px;
    transition: 0.5s;

    @media (max-width: 920px) {
      width: 310px;
      height: 200px;
      margin: 30px 40px 0 30px;
    }

    :hover {
      border: 2px solid ${theme.colors.white};
    }
  }
`
