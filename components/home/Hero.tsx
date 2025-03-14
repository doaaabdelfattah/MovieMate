"use client";
// import React, { useEffect } from "react";
// import useFetch from "@/hooks/useFetch";
// import { fetchMoviesCategory } from "@/lib/tmdb";

import SpiralLoader from "../reusable/SpiralLoader";
import HeroSwiper from "../reusable/HeroSwiper";
import useFetchByGenre from "@/hooks/useFetchByGenre";

// import HeroCarousel from "./HeroCarousel";
export default function Hero() {
  // const {
  //   data: movies,
  //   loading: moviesLoading,
  //   error: moviesError,
  //   // error: moviesError,
  // } = useFetch((page) =>
  //   fetchMoviesCategory({
  //     query: "",
  //     category: "popular",
  //     page,
  //   })
  // );
  const { movies, loading: moviesLoading } = useFetchByGenre(
    10751,
    "popularity.desc"
  );
  const validMovies = movies.filter((movie) => movie.vote_average > 0);

  return (
    <section
      className="h-screen w-full mb-20 flex items-center justify-evenly flex-col"
      id="top"
    >
      {/* ====== gradient effect======= */}

      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      {/* ========= main header */}
      <header>
        <h1 className="text-white leading-15 lg:leading-20 mx-auto  text-center text-3xl lg:text-6xl font-black">
          Movies for Every Moment ..
          <span className="block">Fun for Every Family !</span>
        </h1>
      </header>

      {moviesLoading && <SpiralLoader />}
      {/* {moviesError && <p>Error: {moviesError}</p>} */}
      {/* <div className="w-full">
        <FullSwiper />
      </div> */}
      <div className="w-full h-[500px] p-4">
        <HeroSwiper movies={validMovies} />
        {/* {movies && <HeroCarousel movies={movies.slice(0, 5)} />} */}
      </div>
      {/* {movies && <CoverFlowSwiper movies={movies} />} */}
    </section>
  );
}
