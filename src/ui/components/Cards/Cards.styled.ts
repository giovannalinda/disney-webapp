import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: linear-gradient(#31343e, #1a1d29);
  width: 238px;
  height: 134px;
  border-radius: 10px;
  margin: 30px 17px 0 0;
  border: 3px solid ${theme.colors.gray[400]};
  transition: 0.5s;

  :hover {
    cursor: pointer;
  }

  img {
    margin: 15px 0 0 18px;
    width: 200px;
    height: 100px;
    object-fit: cover;

    @media (max-width: 920px) {
      width: 75px;
      height: 50px;
      margin: 3px 0 0 0;
    }
  }

  @media (max-width: 920px) {
    width: 80px;
    height: 60px;
    margin: 30px 0 0 15px;
  }

  &:hover {
    transform: translateY(-8px);
    border: 3px solid ${theme.colors.white};
  }
`
