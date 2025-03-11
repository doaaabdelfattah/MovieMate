import React from "react";
import HeaderSection from "../reusable/HeaderSection";
import MySwiper from "../reusable/MySwiper";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { Movie } from "@/lib/types";

interface TopRatedMoviesProps {
  movies: Movie[];
}

const TopRatedMovies: React.FC<TopRatedMoviesProps> = ({ movies }) => {
  return (
    <div className="container mx-auto my-20">
      <div className="w-full block lg:hidden pr-3">
        <HeaderSection title="Top Rated Movies" />
      </div>
      <div className="flex justify-center items-center felx-col flex-wrap lg:flex-nowrap lg:flex-row gap-10">
        <div className="hidden lg:flex flex-col md:w-1/3 pr-3">
          <h2 className="text-2xl font-bold border-b pb-4">
            Discover the Top Rated Movies Everyone&apos;s Talking About!
          </h2>
          <span className="text-gray-500 py-4 inline-block font-semibold">
            Most watched movies by days
          </span>
          <Link
            href="/top-rated"
            className=" text-gray-400 hover:text-white duration-200 transition-all justify-end flex items-center gap-1 hover:gap-2 text-right "
          >
            View All <GoArrowRight />
          </Link>
        </div>
        <div className="w-full overflow-hidden">
          <MySwiper movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
