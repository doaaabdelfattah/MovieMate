"use client";
import HeaderSection from "../reusable/HeaderSection";
import MySwiper from "../reusable/MySwiper";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import { fetchMoviesCategory } from "@/lib/tmdb";
import SpiralLoader from "../reusable/SpiralLoader";
import { ChevronRight } from "lucide-react";

const TopRatedMovies = () => {
  const {
    data: movies,
    loading: moviesLoading,
    // error: moviesError,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: "",
      category: "top_rated",
      page,
    })
  );
  return (
    <div className="container mb-40 mx-auto">
      <div className="w-full block lg:hidden pr-3 mb-4">
        <HeaderSection title="Top Rated Movies" />
        <Link
          href="/movies"
          className=" text-gray-400 hover:text-accentColor duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
        >
          View All <ChevronRight />
        </Link>
      </div>
      <div className="flex justify-center items-center felx-col flex-wrap lg:flex-nowrap lg:flex-row gap-10">
        <div className="hidden lg:flex flex-col md:w-1/3 pr-3">
          <h2 className="text-3xl font-bold border-b pb-4">
            Discover the Top Rated Movies Everyone&apos;s Talking About!
          </h2>
          <span className="text-gray-500 py-4 inline-block font-medium">
            Most watched movies by days
          </span>
          <Link
            href="/movies"
            className=" text-gray-400 hover:text-accentColor duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
          >
            View All <ChevronRight />
          </Link>
        </div>
        {moviesLoading && <SpiralLoader />}
        <div className="w-full overflow-hidden">
          {movies && <MySwiper movies={movies} />}
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
