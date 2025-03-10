"use client";

import { Movie } from "@/lib/types";
import { useEffect, useState } from "react";
const FAMILY_FRIENDLY_GENRES = [10751, 16, 12, 14];

// const ROMANCE_GENRE_ID = 10749;
// const DOCUMENTARY_GENRE_ID = 99;

const useFetch = (fetchFunction: () => Promise<T[]>, autoFetch = true) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();

      // ✅ Filter out movies that contain either "Romance" or "Documentary" genre IDs
      const filteredMovies = result.filter((movie: Movie) =>
        movie.genre_ids?.some((id: number) =>
          FAMILY_FRIENDLY_GENRES.includes(id)
        )
      );

      setData(filteredMovies);
    } catch (err) {
      // @ts-ignore
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);
  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
