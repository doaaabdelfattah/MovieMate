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
      loop={true}
      modules={[Navigation]}
      className="h-full"
      spaceBetween={15}
      slidesPerView={5}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
        480: { slidesPerView: 2, spaceBetween: 10 }, // Small tablets
        640: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
        1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
        1280: { slidesPerView: 5, spaceBetween: 10 }, // Large screens
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="h-full">
          <HeroCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
