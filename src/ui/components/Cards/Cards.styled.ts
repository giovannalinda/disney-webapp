import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Content = styled.div`
  background: ${theme.colors.gray[500]};
  width: 238px;
  height: 134px;
  border-radius: 5px;
  margin: 30px 17px 0 0;
  border: 3px solid ${theme.colors.gray[400]};

  img {
    margin: 15px 0 0 18px;
    width: 200px;
    height: 100px;
  }
`
