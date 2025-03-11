"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "@/lib/tmdb";
import MovieCard from "../reusable/MovieCard";
import { Movie } from "@/lib/types";
export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]); // Store movies
  const [currentPage, setCurrentPage] = useState<number>(1); // Track page number
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error handling

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchMovies({
          category: "top_rated",
          currentPage,
          genre: [10751, 16, 878], // Animation, Family, Science Fiction
        });

        setMovies((prevMovies) => {
          const newMovies = response.results.filter(
            (newMovie: Movie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
          );
          return [...prevMovies, ...newMovies];
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage]);
  return (
    <div>
      {error && <p>{error}</p>}

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 h-[900px]">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      <button
        className="cursor-pointer text-bold mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
