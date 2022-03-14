import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.main`
  transform: translateY(25px);
`

export const CategoriesList = styled.ul`
  width: 100%;
  margin: 0 0 0 20px;
`

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 920px) {
    margin: 9px 0 0 -50px;
  }

  & + li {
    margin-top: 34px;
  }

  h3 {
    color: ${theme.colors.white};
    margin-left: 4rem;
    padding-bottom: 1rem;
  }
`
export const MoviesList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0 4rem;
  padding-top: 1rem;
  width: 100%;

  &::-webkit-scrollbar {
    height: 0;
  }
`

export const MovieItem = styled.li`
  & + li {
    margin-left: 1.6rem;
  }

  button {
    border: 3px solid transparent;
    background: transparent;
    border-radius: 4px;
    transition: 0.5s;

    img {
      width: 238px;
      height: 134px;
      object-fit: cover;
      border-radius: 4px;
    }

    &:hover {
      transform: translateY(-5px);
      border-color: ${theme.colors.white};
    }

    &:active {
      transform: translateY(-5px) scale(0.98);
    }
  }
`
