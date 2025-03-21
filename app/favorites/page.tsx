"use client";
import MovieCard from "@/components/reusable/MovieCard";
import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "@/lib/tmdb";
import { Movie } from "@/lib/types";
import HeaderSection from "@/components/reusable/HeaderSection";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

export default function MyFavoritesPage() {
  const [myFav, setMyFav] = useState<number[]>([]);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);

  // ========== Load Saved Favorites =========
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

  // ✅ Individual Movie Animation (Each appears after the other)
  const cardVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: index * 0.15 }, // ✅ Delay each movie
    },
  });

  return (
    <div className="container min-h-screen mx-auto">
      <div className="mt-5 md:mt-10 flex flex-col gap-10 justify-center items-center">
        <div className="flex-1 w-full">
          <HeaderSection
            title="My Favorites +"
            subtitle="Your Personal Movie Vault!"
          />
        </div>

        <div className="flex justify-center items-center">
          {myFav.length > 0 ? (
            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 p-10">
              {favMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants(index)} // ✅ Unique delay per card
                  className="w-full"
                >
                  <MovieCard movie={movie} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-lg font-medium text-center">
                Your favorites list is empty! 🌟 <br /> Start exploring and add
                movies you love to keep them handy for family movie nights!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
