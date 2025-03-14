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
        initialSlide={Math.floor(movies.length / 2)}
        loop={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <div className="r">
          {movies?.map((movie, index) => (
            <SwiperSlide
              role="button"
              aria-label={`View details for ${movie.title}`}
              key={movie.id}
              className="w-[300px] items-center"
              onClick={() => router.push(`/movies/${movie.id}`)}
            >
              <Image
                layout="responsive"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://placehold.co/550x400/1a1a1a/FFFFFF.png`
                }
                alt={movie.title}
                width={300}
                height={400}
                quality={30}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSk..."
              />
            </SwiperSlide>
          ))}
        </div>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
