"use client";
import React, { useState } from "react";
import { fetchMovieDetails } from "@/lib/tmdb";
import { Movie } from "@/lib/types";
import Link from "next/link";
import Rating from "./Rating";
import Image from "next/image";
import { useEffect } from "react";
const MovieCard: React.FC<Movie> = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <div className="relative rounded-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          height={550}
          width={400}
          className="transition-all duration-300 group-hover:scale-105 group-hover:opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/20 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white text-lg font-semibold">{movie.title}</p>
          <Rating vote={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
