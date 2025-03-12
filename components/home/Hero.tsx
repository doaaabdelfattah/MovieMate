"use client";
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { fetchMoviesCategory } from "@/lib/tmdb";
import HeroCarousel from "./HeroCarousel";
import SpiralLoader from "../reusable/SpiralLoader";
import { Movie } from "@/lib/types";
export default function Hero() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const {
    data: movies,
    loading: moviesLoading,
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
    if (movies?.length) {
      setAllMovies((prev) => [...prev, ...movies]);
    }
  }, [movies]);
  useEffect(() => {
    if (allMovies.length < 8 && !moviesLoading) {
      loadMore();
    }
  }, [allMovies, moviesLoading]); // eslint-disable-line react-hooks/exhaustive-deps

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
        {allMovies && <HeroCarousel movies={allMovies} />}
      </div>
    </section>
  );
}
