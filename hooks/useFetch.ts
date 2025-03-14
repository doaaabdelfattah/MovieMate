"use client";

import { Movie } from "@/lib/types";
import { useEffect, useState } from "react";
const FAMILY_FRIENDLY_GENRES = [10751, 16, 12]; // [Family, Animation, Adventure, Fantasy]

const useFetch = (
  fetchFunction: (page: number, category: string) => Promise<Movie[]>,
  category: string = "popular",
  autoFetch = true
) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [currentCategory, setCurrentCategory] = useState<string>(category);

  const fetchData = async (newPage = 1, newCategory = currentCategory) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction(newPage, newCategory);

      // Filter out unwanted genres
      const filteredMovies = result.filter(
        (movie: Movie) =>
          movie.genre_ids?.some((id: number) =>
            FAMILY_FRIENDLY_GENRES.includes(id)
          ) && movie.vote_average > 0 // ✅ Exclude movies with 0 rating
      );

      setData((prevData) => {
        if (newPage === 1) return filteredMovies; // Reset on new search

        const existingIds = new Set(prevData.map((movie) => movie.id));
        const uniqueMovies = filteredMovies.filter(
          (movie) => !existingIds.has(movie.id)
        );

        return [...prevData, ...uniqueMovies]; // Only append unique movies
      });

      setPage(newPage);
      setHasMore(filteredMovies.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetchData(1, currentCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]); // ✅ Triggers re-fetch on category change

  const loadMore = () => {
    if (hasMore && !loading) fetchData(page + 1, currentCategory);
  };

  const changeCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
    setData([]); // ✅ Clear previous data when switching categories
    setPage(1);
    fetchData(1, newCategory);
  };

  return {
    data,
    loading,
    error,
    loadMore,
    hasMore,
    refetch: () => fetchData(1, currentCategory),
    changeCategory,
  };
};

export default useFetch;
