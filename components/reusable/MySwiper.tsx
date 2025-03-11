"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { Movie } from "@/lib/types";
interface MySwiperProps {
  movies: Movie[];
}

const MySwiper: React.FC<MySwiperProps> = ({ movies }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={10}
      slidesPerView={5}
      breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link href={`/movies/${movie.id}`} className="group">
            <div className="relative overflow-hidden rounded-lg">
              {/* Movie Poster */}
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className="transition-all duration-300 group-hover:scale-105 group-hover:opacity-70"
                priority
              />

              {/* Hover Overlay (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/20 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold">
                  {movie.title}
                </p>
                <Rating vote={movie.vote_average} />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
