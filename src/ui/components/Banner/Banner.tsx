import { pandaHug, pixar, red } from 'assets'

import * as S from './Banner.styled'

export function Banner() {
  return (
    <S.Container>
      <img src={pixar} alt='logo pixar' />
      <S.Content>
        <p>Red - Crescer é uma Fera</p>
        <span>E mais aventuras da Pixar</span>
        <button>DETALHES</button>
        <S.Movies>
          <img src={red} alt='red: crescer é uma fera' />
          <img src={pandaHug} alt='o abraço do panda a fera vermelha' />
        </S.Movies>
      </S.Content>
    </S.Container>
  )
}
