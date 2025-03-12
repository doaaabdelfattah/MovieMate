"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import AddToFavButton from "../reusable/AddToFavButton";
import { MovieProps } from "@/lib/types";
// import { getGenreNames } from "@/lib/utils";
import Link from "next/link";
import Rating from "../reusable/Rating";
// import { useFavorites } from "@/hooks/useFavorites";

const HeroCard: React.FC<MovieProps> = ({ movie }) => {
  // const { favorites } = useFavorites();
  // const isFavorite = favorites.includes(movie.id);

  const [showDetails, setShowDetails] = useState(false);

  // const genres = getGenreNames(movie.genre_ids, genreMap || {}).join(" | ");
  return (
    <div
      className="relative w-full h-full bg-cover bg-center cursor-pointer transition-all duration-300     
      "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
      }}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      key={movie.id}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={showDetails ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-all duration-700"
      />

      {/* Animated Movie Details */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={showDetails ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-start justify-end mb-4 gap-2 text-white p-6 mx-auto text-left"
      >
        <Link href={`/movies/${movie.id}`}>
          <h2 className="text-5xl font-black uppercase">{movie.title}</h2>
          {/* <span className="font-light">{genres}</span> */}

          <Rating vote={movie.vote_average} />
        </Link>

        <AddToFavButton movieId={movie.id} />
      </motion.div>
    </div>
  );
};

export default HeroCard;
