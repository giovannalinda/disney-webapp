import { useEffect, useState } from 'react'

import { Banner } from 'ui/components/Banner'
import { Cards } from 'ui/components/Cards'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'
import { Recommendation } from 'ui/components/Recommendation'
import { MoviesList } from 'ui/components/MoviesList'

import { Category } from 'types'

import api from 'services/api'

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
            movies: category.movies,
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
            <MoviesList
              key={category.title}
              title={category.title}
              movies={category.movies}
            />
          ))}
        </S.CategoriesList>
        <Banner />
      </S.Container>
      <Footer />
    </>
  )
}
