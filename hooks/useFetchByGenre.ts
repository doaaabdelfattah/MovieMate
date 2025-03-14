import { useEffect, useState } from "react";
import { Movie } from "@/lib/types";
import { fetchMoviesByGenre } from "@/lib/fetchMovieByGenre";

const useFetchByGenre = (
  initialGenreId: number,
  initialSortBy: "popularity.desc" | "release_date.desc" = "popularity.desc",
  autoFetch = true
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [currentGenreId, setCurrentGenreId] = useState<number>(initialGenreId);
  const [sortBy, setSortBy] = useState(initialSortBy);

  const fetchMovies = async (
    newPage = 1,
    genreId = currentGenreId,
    sorting = sortBy
  ) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchMoviesByGenre(genreId, newPage, sorting);

      setMovies((prevMovies) => {
        if (newPage === 1) return result; // Reset on genre/sort change
        return [...prevMovies, ...result];
      });

      setPage(newPage);
      setHasMore(result.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetchMovies(1, currentGenreId, sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGenreId, sortBy]);
  const loadMore = () => {
    if (hasMore && !loading) fetchMovies(page + 1, currentGenreId, sortBy);
  };

  const changeGenre = (newGenreId: number) => {
    setCurrentGenreId(newGenreId);
    setMovies([]); // ✅ Clear previous data
    setPage(1);
    fetchMovies(1, newGenreId, sortBy);
  };

  const changeSort = (newSortBy: "popularity.desc" | "release_date.desc") => {
    setSortBy(newSortBy);
    setMovies([]); // ✅ Clear previous data
    setPage(1);
    fetchMovies(1, currentGenreId, newSortBy);
  };

  return {
    movies,
    loading,
    error,
    loadMore,
    hasMore,
    changeGenre,
    changeSort,
    refetch: () => fetchMovies(1, currentGenreId, sortBy),
  };
};

export default useFetchByGenre;
