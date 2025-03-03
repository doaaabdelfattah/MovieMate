
import React from "react";
import { fetchUpcomingMovies, fetchPopularTvs } from "@/lib/tmdb";
import { filterMovies } from "@/lib/utils";
import { MoviesResponse } from "@/lib/types";
import useFilter from "@/hooks/useFilter";
import HeroCard from "./HeroCard";

export default async function Hero () {

  const movies : MoviesResponse = await fetchUpcomingMovies();
  const filteredMovies = filterMovies(movies, "adult", false, 3);



  const filterdMovies = filterMovies(movies, "adult", false, 3)
console.log(filterdMovies);

  return (
    <div className="h-[100dvh]  " id="home">
      {/* Black overlay */}
      
      <div className="flex items-center justify-evenly">
      {filteredMovies.map((movie) => (
        <HeroCard movie={movie}/>
      ))}
    </div>
      

     
    </div>
  );
};


