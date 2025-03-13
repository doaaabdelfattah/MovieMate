import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MoviesResponse } from "@/lib/types";
// import dynamic from "next/dynamic";
// const Swiper = dynamic(() => import("swiper/react"), { ssr: false });
import Image from "next/image";
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
              role="button"
              aria-label={`View details for ${movie.title}`}
              key={movie.id}
              className="w-[300px] items-center h-[500px]"
              onClick={() => router.push(`/movies/${movie.id}`)}
            >
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://placehold.co/550x400/1a1a1a/FFFFFF.png`
                }
                alt={movie.title}
                height={550}
                width={400}
                className=""
                quality={80}
                priority={false}
              />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
