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
    <div className="container mx-auto my-20">
      <div className="w-full block lg:hidden pr-3 mb-4">
        <HeaderSection title="Top Rated Movies" />
        <Link
          href="/movies"
          className=" text-gray-400 hover:text-white duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
        >
          View All <GoArrowRight />
        </Link>
      </div>
      <div className="flex w-[85%] mx-auto ">
        {moviesLoading && <SpiralLoader />}
        {movies && <Accoordin movies={movies} />}

        <div className="hidden lg:flex flex-col md:w-1/3 pr-3">
          <h2 className="text-3xl font-bold border-b pb-4">
            Discover the Top Rated Movies Everyone&apos;s Talking About!
          </h2>
          <span className="text-gray-500 py-4 inline-block font-medium">
            Most watched movies by days
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
