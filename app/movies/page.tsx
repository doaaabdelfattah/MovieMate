"use client";

import { fetchMoviesCategory } from "@/lib/tmdb";
import useFetch from "@/hooks/useFetch";
import MovieCard from "@/components/reusable/MovieCard";
import HeaderSection from "@/components/reusable/HeaderSection";
// import useFetchPage from "@/hooks/useFetchPage";

export default function MoviesPage() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,

    loadMore,
    hasMore,
  } = useFetch((page) =>
    fetchMoviesCategory({
      query: "",
      category: "upcoming",
      page,
    })
  );

  return (
    <section className="container mx-auto">
      <article className="mt-[100px]">
        <HeaderSection title="Discover Movies" />
      </article>
      {moviesLoading && <p>Loading...</p>}
      {moviesError && <p>Error: {moviesError}</p>}
      <div>
        <ul className="grid grid-cols-5 gap-4 p-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>

        {hasMore && (
          <button
            className="cursor-pointer bg-amber-300 p-3"
            onClick={loadMore}
            disabled={moviesLoading}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
