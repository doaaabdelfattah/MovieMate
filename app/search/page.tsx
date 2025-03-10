"use client";
import useFetch from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import { customFetchMovies } from "@/lib/tmdb";
import { useSearchParams } from "next/navigation";
import MovieCard from "@/components/reusable/MovieCard";
import SearchBar from "@/components/reusable/SearchBar";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const {
    data: movies,
    loading,
    error,
    refetch,
  } = useFetch(() => customFetchMovies({ query: searchQuery }), false);

  // Fetch movies when query changes OR reset when empty
  useEffect(() => {
    if (initialQuery.trim() !== "") {
      refetch();
    } else {
      refetch();
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-10">
        <SearchBar
          handleOnClick={() => refetch()}
          placeHolder="Search for movies"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && movies?.length === 0 && <p>No results found.</p>}
      {!searchQuery.trim() === "" && (
        <p className="text-center text-lg mt-5">
          Search results for "{searchQuery}
        </p>
      )}
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
