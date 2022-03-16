import { bannerPixar } from 'assets'
import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  background-image: url(${bannerPixar});
  background-size: cover;
  height: 500px;
  width: 100%;
  margin: 40px 0 0 0;

  img {
    height: 200px;
    width: 400px;
    object-fit: cover;
    margin: 50px 0 0 30px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: -20px 10px 0 90px;

  p {
    font-size: 20px;
    margin: 0 0 20px 0;
    color: ${theme.colors.white};
  }

  span {
    color: ${theme.colors.white};
    opacity: 65%;
    font-size: 13px;
  }

  button {
    width: 130px;
    height: 50px;
    border-radius: 5px;
    border: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.gray[400]};
    opacity: 95%;
    margin-top: 20px;
    transition: 0.5s;

    :hover {
      transform: translateY(-6px);
      border: 3px solid ${theme.colors.white};
    }
  }
`

export const Movies = styled.div`
  display: flex;
  margin: -200px 0 0 400px;

  img {
    border-radius: 5px;
    width: 300px;
    height: 170px;
    transition: 0.5s;

    :hover {
      transform: translateY(-6px);
      border: 3px solid ${theme.colors.white};
    }
  }
`
