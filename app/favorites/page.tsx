"use client";
import MovieCard from "@/components/reusable/MovieCard";
import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "@/lib/tmdb";
import { Movie } from "@/lib/types";

export default function MyFavoritesPage() {
  const [myFav, setMyFav] = useState<number[]>([]);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);

  // ========== load Saved Favorites =========
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFav = JSON.parse(localStorage.getItem("favorites") || "[]");
      setMyFav(savedFav);
    }
  }, []);

  // ========== Fetch Movie details for each fav movie id =========
  useEffect(() => {
    const fetchMovies = async () => {
      if (myFav.length === 0) return;
      const movies = await Promise.all(
        myFav.map(async (id) => {
          const movie = await fetchMovieDetails(id);
          return movie;
        })
      );
      setFavMovies(movies);
    };
    fetchMovies();
  }, [myFav]);

  return (
    <div className="container mx-auto">
      <h1>My Favorites</h1>
      <div className="mx-auto">
        {myFav.length > 0 ? (
          <div className="grid grid-cols-5 gap-4 p-10">
            {favMovies.map((movie) => (
              <div className="w-full" key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
}
