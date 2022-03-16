import styled from 'styled-components'

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 920px) {
    margin: 9px 0 0 -50px;
  }

  h3 {
    color: ${({ theme }) => theme.textColor};
    margin-left: 4rem;
    margin-top: 10px;
  }
`
export const MoviesList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0 4rem;
  padding-top: 1rem;
  width: 94%;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scroll};
  }
`

export const MovieItem = styled.button`
  border: 3px solid transparent;
  background: transparent;
  border-radius: 4px;
  transition: 0.5s;
  margin: 0 10px 0 0;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.hover};
  }

  &:active {
    transform: translateY(-5px) scale(0.98);
  }

  img {
    width: 238px;
    height: 134px;
    object-fit: cover;
    border-radius: 4px;
    pointer-events: none;
  }
`
