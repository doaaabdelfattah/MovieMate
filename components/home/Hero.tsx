
import React from "react";
import { fetchUpcomingMovies, fetchPopularTvs, fetchPopularMovies, fetchGenres } from "@/lib/tmdb";
import { filterMovies } from "@/lib/utils";
import { MoviesResponse } from "@/lib/types";

import HeroCard from "./HeroCard";

export default async function Hero () {

  const movies : MoviesResponse = await fetchPopularMovies();
  const filteredMovies = filterMovies(movies, "adult", false, 3);
  const genreMap = await fetchGenres();


  return (
    <div className="" id="home">
      {/* Black overlay */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[calc(100vh-90px)] w-full">
      {filteredMovies.map((movie) => (
        <HeroCard key={movie.id} movie={movie} genreMap={genreMap}/>
      ))}
    </div>
      

     
    </div>
  );
};


