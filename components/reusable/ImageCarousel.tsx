"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  title: string;
  image: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

const ImageCarousel = ({ slides }: ImageCarouselProps) => {
  return (
    <section className="image-carousel image-carousel-container">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center",
            }}
          >
            {/* <div>
              <div>
                <h2>{slide.title}</h2>
                <a>explore</a>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
