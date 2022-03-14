import { useEffect, useState } from 'react'
import api from 'services/api'
import { Category } from 'types'
import { Cards } from 'ui/components/Cards'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'
import { Recommendation } from 'ui/components/Recommendation'

import * as S from './Home.styled'

export function Home() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api
      .get<Category[]>('/categories')
      .then((response) => {
        setCategories(
          response.data.map((category) => ({
            title: category.title,
            movies: category.movies.slice(0, 7),
          })),
        )
      })
      .catch((err) => {
        console.error('deu erro :( ' + err)
      })
  }, [])

  return (
    <>
      <Header />
      <Recommendation />
      <Cards />
      <S.Container>
        <S.CategoriesList>
          {categories.map((category) => (
            <S.CategoryItem key={category.title}>
              <h3>{category.title}</h3>
              <S.MoviesList>
                {category.movies.map((movie) => (
                  <S.MovieItem key={movie.title}>
                    <button>
                      <img src={movie.thumbnail} alt={movie.title} />
                    </button>
                  </S.MovieItem>
                ))}
              </S.MoviesList>
            </S.CategoryItem>
          ))}
        </S.CategoriesList>
      </S.Container>
      <Footer />
    </>
  )
}
