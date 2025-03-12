"use client";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { fetchMoviesCategory } from "@/lib/tmdb";
import HeroCarousel from "./HeroCarousel";
import SpiralLoader from "../reusable/SpiralLoader";
export default function Hero() {
  const {
    data: movies,
    loading: moviesLoading,
    // error: moviesError,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: "",
      category: "upcoming",
      page,
    })
  );

  return (
    <section className=" h-screen w-full flex items-center justify-evenly flex-col">
      <h1 className="text-white my-10 leading-15 lg:leading-20 mx-auto  text-center text-4xl lg:text-6xl font-bold">
        Movies for Every Moment
        <br />
        Fun for Every Family !
      </h1>

      {moviesLoading && <SpiralLoader />}
      {/* {moviesError && <p>Error: {moviesError}</p>} */}

      <div className="w-full">
        <HeroCarousel movies={movies} />
      </div>
    </section>
  );
}
