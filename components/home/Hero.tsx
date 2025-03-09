import React from "react";
import { fetchPopularMovies, fetchGenres } from "@/lib/tmdb";
import { filterMoviesByGenre } from "@/lib/utils";
import { MoviesResponse } from "@/lib/types";

import HeroCard from "./HeroCard";

export default async function Hero() {
  const movies: MoviesResponse = await fetchPopularMovies();
  const filteredMovies = filterMoviesByGenre(movies, [16], 3);

  const genreMap = await fetchGenres();

  return (
    <div className="relative" id="home">
      {/* Black overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-70 z-0"></div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[calc(100vh-90px)] w-full">
        {filteredMovies.map((movie) => (
          <HeroCard key={movie.id} movie={movie} genreMap={genreMap} />
        ))}
      </div>
    </div>
  );
}
