import { disney, marvel, nationalGeographic, pixar, starWars } from 'assets'
import * as S from './Cards.styled'

export function Cards() {
  return (
    <S.Container>
      <S.Content>
        <img src={disney} alt='disney logo' />
      </S.Content>
      <S.Content>
        <img src={pixar} alt='pixar logo' />
      </S.Content>
      <S.Content>
        <img src={marvel} alt='marvel logo' />
      </S.Content>
      <S.Content>
        <img src={starWars} alt='star wars logo' />
      </S.Content>
      <S.Content>
        <img src={nationalGeographic} alt='national geographic logo' />
      </S.Content>
    </S.Container>
  )
}
