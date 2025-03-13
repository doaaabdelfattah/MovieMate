"use client";

import { fetchMoviesCategory } from "@/lib/tmdb";
// import { fetchMoviesCategorySafe } from "@/lib/tmdb";
import useFetch from "@/hooks/useFetch";
import MovieCard from "@/components/reusable/MovieCard";
import HeaderSection from "@/components/reusable/HeaderSection";
import SearchBar from "@/components/reusable/SearchBar";
import { useEffect, useState } from "react";
import LoadMore from "@/components/reusable/LoadMore";

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
    loadMore,
    hasMore,
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
      <div className="mt-[200px] flex justify-center gap-4 items-center ">
        <div className="flex-1">
          <HeaderSection title="Discover Movies" />
        </div>
        <div>
          <SearchBar
            handleOnClick={() => refetch()}
            placeHolder="Search for movies"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            isScroll={false}
          />
        </div>
      </div>
      {moviesLoading && <p>Loading...</p>}
      {moviesError && <p>Error: {moviesError}</p>}
      <div>
        <ul className="grid grid-cols-5 gap-4 p-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>

        {hasMore && <LoadMore onClick={loadMore} loading={moviesLoading} />}
      </div>
    </section>
  );
}
