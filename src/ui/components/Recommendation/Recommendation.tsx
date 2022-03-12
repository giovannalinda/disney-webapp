import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import * as S from './Recommendation.styled'
import { cruella, dug, red, ron } from 'assets'

export function Recommendation() {
  return (
    <S.Container>
      <Swiper spaceBetween={10} slidesPerView={1.6}>
        <SwiperSlide>
          <img src={red} alt='red: crescer é uma fera' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ron} alt='ron bugado' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dug} alt='encanto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cruella} alt='encanto' />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  )
}
