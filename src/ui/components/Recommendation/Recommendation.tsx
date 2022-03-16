import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper'
import { cruella, dug, luca, raya, red, ron } from 'assets'

import * as S from './Recommendation.styled'

export function Recommendation() {
  return (
    <S.Container>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={80}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={red} alt='red: crescer é uma fera' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={luca} alt='luca' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ron} alt='ron bugado' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dug} alt='a vida de dug' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cruella} alt='cruella' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={raya} alt='raya e o último dragão' />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  )
}
