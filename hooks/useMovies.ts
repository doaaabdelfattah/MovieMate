"use client";
import { fetchMovies } from "@/lib/tmdb";
import { Movie } from "@/lib/types";
import { useState, useEffect } from "react";

export default function useMovies(category = "popular", genre: number[] = []) {
  const [movies, setMovies] = useState<Movie[]>([]); // store movies
  const [page, setPage] = useState<number>(1); // store current page
  const [loading, setLoading] = useState<boolean>(false); // store loading state
  const [error, setError] = useState<string | null>(null); // store error state
  const [hasMore, setHasMore] = useState<boolean>(true); // Track if more pages exist

  const loadMovies = async (newPage = 1, append = false) => {
    if (!hasMore || loading) return; // Prevent unnecessary calls

    setLoading(true);
    setError(null);

    try {
      const response = await fetchMovies({
        category,
        currentPage: newPage,
        genre,
      });
      const newMovies = response.results || [];

      setMovies((prevMovies) =>
        append ? [...prevMovies, ...newMovies] : newMovies
      );
      setPage(newPage);

      if (newMovies.length < 20) setHasMore(false); // TMDB usually returns 20 movies per page
    } catch (error) {
      setError("Failed to fetch movies, please try again later");
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when category or genre changes
  useEffect(() => {
    setMovies([]); // Reset movie list
    setPage(1);
    setHasMore(true);
    loadMovies(1);
  }, [category, genre]);

  // Function to load more movies
  const loadMoreMovies = () => {
    loadMovies(page + 1, true);
  };

  return { movies, loading, error, hasMore, loadMoreMovies };
}
