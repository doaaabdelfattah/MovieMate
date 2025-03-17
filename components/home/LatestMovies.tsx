"use client";
import HeaderSection from "../reusable/HeaderSection";
// import useFetch from "@/hooks/useFetch";
// import { fetchMoviesCategory } from "@/lib/tmdb";
import Accoordin from "../reusable/Accoordin";
import Link from "next/link";
import useFetchByGenre from "@/hooks/useFetchByGenre";
import { ChevronRight } from "lucide-react";
import SpiralLoader from "../reusable/SpiralLoader";

const LatestMovies = () => {
  // const {
  //   data: movies,
  //   loading: moviesLoading,
  //   // error: moviesError,
  // } = useFetch((page) =>
  //   fetchMoviesCategory({
  //     query: "",
  //     category: "now_playing",
  //     page,
  //   })
  // );
  const { movies, loading } = useFetchByGenre(16);

  return (
    <div className="container  mx-auto my-20">
      <div className="w-full block lg:hidden pr-3 mb-4">
        <HeaderSection
          title="Now Playing"
          subtitle="🎞️ Lights, Camera, Action!"
        />
        <Link
          href="/movies"
          className=" text-gray-400 hover:text-accentColor duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
        >
          View All <ChevronRight />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10 w-[85%] mx-auto ">
        {loading && <SpiralLoader />}
        <div className="w-full lg:w-2/3 flex justify-center items-center overflow-hidden">
          {movies.length > 0 && <Accoordin movies={movies.slice(0, 6)} />}
        </div>
        <div className="hidden lg:flex flex-col md:w-1/3 pr-3">
          <h2 className="text-3xl font-bold border-b pb-4">
            Discover the latest Family films hitting the big screen!
          </h2>
          <span className="text-gray-500 py-4 inline-block font-medium">
            These fresh releases are making waves in theaters right now—don’t
            miss out on the excitement! 🍿✨
          </span>
          <Link
            href="/movies"
            className=" text-gray-400 hover:text-accentColor duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
          >
            View All <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
