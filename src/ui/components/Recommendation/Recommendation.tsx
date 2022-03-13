import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'
import { cruella, dug, red, ron } from 'assets'

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
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={red} alt='red: crescer é uma fera' />
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
      </Swiper>
    </S.Container>
  )
}
