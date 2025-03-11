"use client";

import { Movie } from "@/lib/types";
import { useEffect, useState } from "react";
const FAMILY_FRIENDLY_GENRES = [10751, 16, 12, 14];

// const ROMANCE_GENRE_ID = 10749;
// const DOCUMENTARY_GENRE_ID = 99;

const useFetchPage = (
  fetchFunction: (page: number) => Promise<Movie[]>,
  autoFetch = true
) => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async (newPage = 1) => {
    try {
      console.log("Fetching page:", newPage);
      setLoading(true);
      setError(null);

      const result = await fetchFunction(newPage);

      // ✅ Filter out movies that contain either "Romance" or "Documentary" genre IDs
      const filteredMovies = result.filter((movie: Movie) =>
        movie.genre_ids?.some((id: number) =>
          FAMILY_FRIENDLY_GENRES.includes(id)
        )
      );

      setData((prevData) =>
        newPage === 1
          ? filteredMovies
          : [...(prevData || []), ...filteredMovies]
      );
      setPage(newPage);
      setHasMore(filteredMovies.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  });

  const loadMore = () => {
    if (hasMore && !loading) fetchData(page + 1); // Fetch next page when "Load More" is clicked
  };
  const reset = () => {
    setData([]);
    setLoading(false);
    setError(null);
    setPage(1);
    setHasMore(true);
  };
  return { data, loading, error, loadMore, hasMore, refetch: fetchData, reset };
};

export default useFetchPage;
