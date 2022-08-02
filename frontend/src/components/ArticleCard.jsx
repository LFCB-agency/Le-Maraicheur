import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function ArticleCard() {
  return (
    <section className="swiper-container">
      <Swiper
        slidesPerView={3}
        initialSlide={1}
        spaceBetween={30}
        // centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </section>
  );
}
