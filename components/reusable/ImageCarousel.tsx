"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import "swiper/css";

// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });

// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   { ssr: false }
// );

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
        loop={slides.length > 3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        breakpoints={{
          0: { slidesPerView: 1 }, // Full-width on small screens
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on large screens
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <Image
              src={
                slide.image || `https://placehold.co/550x400/1a1a1a/FFFFFF.png`
              }
              alt={slide.title}
              height={500}
              width={650}
              quality={50}
              priority={index === 0} // Improve LCP performance
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
