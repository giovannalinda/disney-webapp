import { Movie } from 'types'

import * as S from './MoviesList.styled'

type Props = {
  title: string
  movies: Movie[]
}

export function MoviesList({ title, movies }: Props) {
  return (
    <S.CategoryItem>
      <h3>{title}</h3>
      <S.MoviesList>
        {movies.map((movie) => (
          <S.MovieItem key={movie.title}>
            <img src={movie.thumbnail} alt={movie.title} />
          </S.MovieItem>
        ))}
      </S.MoviesList>
    </S.CategoryItem>
  )
}
