"use client";

import { Movie } from "@/lib/types";
import { useEffect, useState } from "react";
const FAMILY_FRIENDLY_GENRES = [10751, 16, 12]; // [Family, Animation, Adventure, Fantasy]
const EXCLUDED_GENRE = 10749;

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
      // const filteredMovies = result;
      // Filter out unwanted genres
      // const filteredMovies = result.filter(
      //   (movie: Movie) =>
      //     movie.genre_ids?.some((id: number) =>
      //       FAMILY_FRIENDLY_GENRES.includes(id)
      //     ) && movie.vote_average > 0
      // );
      const filteredMovies = result.filter(
        (movie: Movie) =>
          !movie.genre_ids?.includes(EXCLUDED_GENRE) && movie.poster_path // Exclude Romanc // Exclude movies with a rating of 0
      );
      console.log(
        "Fetched movies:",
        result.length,
        "Filtered movies:",
        filteredMovies.length
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
  }, [currentCategory]);

  const loadMore = () => {
    if (hasMore && !loading) fetchData(page + 1, currentCategory);
  };

  const changeCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
    setData([]);
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
