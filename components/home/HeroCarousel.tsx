import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MoviesResponse } from "@/lib/types";

export const HeroCarousel: React.FC<MoviesResponse> = ({ movies }) => {
  const router = useRouter();
  return (
    <section className="carousel-3d carousel-3d-container">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView="auto"
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <div className="swiper-wrapper">
          {movies?.map((movie) => (
            <SwiperSlide
              key={movie.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              }}
              onClick={() => router.push(`/movies/${movie.id}`)}
            />
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
