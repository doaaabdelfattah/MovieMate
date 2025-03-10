"use client";
import React from "react";
import { Movie } from "@/lib/types";
import Link from "next/link";
import Rating from "./Rating";
import Image from "next/image";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="cursor-pointer">
      <div className="relative cursor-pointer rounded-lg object-cover group">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `https://placehold.co/550x400/1a1a1a/FFFFFF.png`
          }
          alt={movie.title}
          height={550}
          width={400}
          className="w-full rounded-lg h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-70"
        />

        <div className="p-2 mt-1">
          <p className="text-white text-base font-semibold overflow-hidden whitespace-nowrap">
            {movie.title}
          </p>
          <p className="text-gray-300 text-sm">
            {movie.release_date ? movie.release_date.split("-")[0] : ""}
          </p>
          <Rating vote={movie.vote_average} />
        </div>

        {/* <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white text-lg font-semibold overflow-hidden whitespace-nowrap">
            {movie.title}
          </p>
          <p className="text-white text-sm">
            {movie.release_date ? movie.release_date.split("-")[0] : ""}
          </p>
          <Rating vote={movie.vote_average} />
        </div> */}
      </div>
    </Link>
  );
};

export default MovieCard;
