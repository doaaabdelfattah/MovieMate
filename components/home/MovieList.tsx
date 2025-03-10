"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "@/lib/tmdb";
import MovieCard from "../reusable/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]); // Store movies
  const [currentPage, setCurrentPage] = useState(1); // Track page number
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error handling

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
            (newMovie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
          );
          return [...prevMovies, ...newMovies]; // ✅ Append movies, don't replace
        });
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage]); // Runs when `currentPage` changes

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
        disabled={loading} // Prevent multiple clicks while loading
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
