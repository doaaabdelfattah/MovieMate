"use client";
import React, { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { fetchMoviesCategory } from "@/lib/tmdb";
import HeroCarousel from "./HeroCarousel";
import SpiralLoader from "../reusable/SpiralLoader";

export default function Hero() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    loadMore,
    // error: moviesError,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: "",
      category: "top_rated",
      page,
    })
  );

  useEffect(() => {
    if (movies.length < 8 && !moviesLoading) {
      loadMore();
    }
  }, [movies, moviesLoading]); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(movies);
  return (
    <section
      className=" h-screen w-full flex items-center justify-evenly flex-col"
      id="top"
    >
      {/* ====== gradient effect======= */}

      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      {/* ========= main header */}
      <h1 className="text-white my-10 leading-15 lg:leading-20 mx-auto  text-center text-4xl lg:text-6xl font-bold">
        Movies for Every Moment
        <br />
        Fun for Every Family !
      </h1>

      {moviesLoading && <SpiralLoader />}
      {moviesError && <p>Error: {moviesError}</p>}

      <div className="w-full">{movies && <HeroCarousel movies={movies} />}</div>
    </section>
  );
}
