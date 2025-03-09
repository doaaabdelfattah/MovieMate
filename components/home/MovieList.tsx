"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "@/lib/tmdb";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchMovies({
          category: "popular",
          currentPage,
          genre: [16, 10751, 878, 99],
        });
        setMovies((prevMovies) => {
          // ✅ Filter out duplicate movies by ID
          const newMovies = response.results.filter(
            (newMovie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
          );

          return [...prevMovies, ...newMovies];
        });
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage]); // Runs when currentPage changes

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <button
        className="cursor-pointer text-bold"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Load More
      </button>
    </div>
  );
}
