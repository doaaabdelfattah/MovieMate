"use client";
import HeaderSection from "../reusable/HeaderSection";
import useFetch from "@/hooks/useFetch";
import { fetchMoviesCategory } from "@/lib/tmdb";
import Accoordin from "../reusable/Accoordin";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import SpiralLoader from "../reusable/SpiralLoader";
const LatestMovies = () => {
  const {
    data: movies,
    loading: moviesLoading,
    // error: moviesError,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: "",
      category: "now_playing",
      page,
    })
  );
  console.log(movies);
  return (
    <div className="container  mx-auto my-20">
      <div className="w-full block lg:hidden pr-3 mb-4">
        <HeaderSection
          title="Now Playing"
          subtitle="🎞️ Lights, Camera, Action!"
        />
        <Link
          href="/movies"
          className=" text-gray-400 hover:text-white duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
        >
          View All <GoArrowRight />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10 w-[85%] mx-auto ">
        {moviesLoading && <SpiralLoader />}
        <div className="  flex justify-center items-center">
          {movies && <Accoordin movies={movies} />}
        </div>
        <div className="hidden lg:flex flex-col md:w-1/3 pr-3">
          <h2 className="text-3xl font-bold border-b pb-4">
            Experience the latest films hitting the big screen!
          </h2>
          <span className="text-gray-500 py-4 inline-block font-medium">
            These fresh releases are making waves in theaters right now—don’t
            miss out on the excitement! 🍿✨
          </span>
          <Link
            href="/movies"
            className=" text-gray-400 hover:text-white duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
          >
            View All <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
