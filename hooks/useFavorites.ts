/**
 * useFavorites - A custom React hook for managing favorite movies using local storage.
 *
 * This hook allows users to:
 * - Save movies as favorites.
 * - Remove movies from favorites.
 * - Persist favorites using localStorage, ensuring they remain after page reloads.
 *
 * @returns {object} An object containing:
 * - favorites: An array of favorite movie IDs.
 * - updateFavorites: A function to add/remove a movie from favorites.

 */

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    }
    return [];
  });

  // ===== Load favorites from local storage when start
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or Remove favorite movie ========

  /**
   * Updates the favorite movie list:
   * - If the movie is already favorited, remove it.
   * - If not, add it to favorites.
   *
   * @param {number} movieId - The ID of the movie to add/remove.
   */

  function updateFavorites(movieId: number) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(movieId)
        ? prevFavorites.filter((id) => id !== movieId)
        : [...prevFavorites, movieId];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }

  return { favorites, updateFavorites };
}
