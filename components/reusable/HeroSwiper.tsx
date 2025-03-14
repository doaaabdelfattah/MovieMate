"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Movie } from "@/lib/types";
import HeroCard from "../home/HeroCard";
import { motion } from "framer-motion";

interface MySwiperProps {
  movies: Movie[];
}

// Individual slide animation with custom delay
const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 }, // Stagger by index
  }),
};

const HeroSwiper: React.FC<MySwiperProps> = ({ movies }) => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation]}
      className="h-full"
      spaceBetween={15}
      slidesPerView={5}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: 5, spaceBetween: 10 },
      }}
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={movie.id} className="h-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideVariants}
            custom={index} // Pass index to control delay
            className="h-full"
          >
            <HeroCard movie={movie} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
