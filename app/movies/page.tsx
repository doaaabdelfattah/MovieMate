"use client";
import { motion } from "framer-motion";
import { fetchMoviesCategory } from "@/lib/tmdb";
import useFetch from "@/hooks/useFetch";
import MovieCard from "@/components/reusable/MovieCard";
import HeaderSection from "@/components/reusable/HeaderSection";
import SearchBar from "@/components/reusable/SearchBar";
import { useState, useEffect } from "react";
import LoadMore from "@/components/reusable/LoadMore";
import SpiralLoader from "@/components/reusable/SpiralLoader";

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const cardVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: index * 0.15 },
    },
  });
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
    hasMore,
    loadMore,
    // error: moviesError,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: searchQuery,
      category: "discover",
      page,
    })
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap gap-4 my-5 items-center">
        <div className="md:w-2/3 w-full">
          <HeaderSection title="Discover Movies" />
        </div>
        <div className="flex-1">
          <SearchBar
            handleOnClick={() => refetch()}
            placeHolder="Search for movies"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            isScroll={false}
          />
        </div>
      </div>

      {moviesLoading && <SpiralLoader />}
      {moviesError && <p>Error: {moviesError}</p>}

      <div>
        <ul className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 p-5">
          {movies?.map((movie, index) => (
            <motion.li
              key={movie.id}
              initial="hidden"
              animate="visible"
              variants={cardVariants(index)} // ✅ Unique delay per card
            >
              <MovieCard movie={movie} />
            </motion.li>
          ))}
        </ul>

        <div className="mb-10">
          {hasMore && <LoadMore onClick={loadMore} loading={moviesLoading} />}
        </div>
      </div>
    </section>
  );
}
