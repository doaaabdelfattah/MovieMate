
import React from "react";
import { fetchUpcomingMovies, fetchPopularTvs } from "@/lib/tmdb";
import { filterMovies } from "@/lib/utils";
import { MoviesResponse } from "@/lib/types";

import HeroCard from "./HeroCard";

export default async function Hero () {

  const movies : MoviesResponse = await fetchUpcomingMovies();
  const filteredMovies = filterMovies(movies, "adult", false, 3);


  return (
    <div className="" id="home">
      {/* Black overlay */}
      
      <div className="flex items-center justify-evenly">
      {filteredMovies.map((movie) => (
        <HeroCard movie={movie}/>
      ))}
    </div>
      

     
    </div>
  );
};


