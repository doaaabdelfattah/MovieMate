"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";
// import Rating from "./Rating";
import { Movie } from "@/lib/types";
import HeroCard from "../home/HeroCard";
interface MySwiperProps {
  movies: Movie[];
}

const HeroSwiper: React.FC<MySwiperProps> = ({ movies }) => {
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
          <HeroCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
