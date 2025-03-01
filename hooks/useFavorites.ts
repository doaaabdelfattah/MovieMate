/**
 * useFavorites - A custom React hook for managing favorite movies using local storage.
 *
 * This hook allows users to:
 * - Save movies as favorites.
 * - Remove movies from favorites.
 * - Persist favorites using `localStorage`, ensuring they remain after page reloads.
 *
 * @returns {object} An object containing:
 * - `favorites`: An array of favorite movie IDs.
 * - `updateFavorites`: A function to add/remove a movie from favorites.

 */

import { useState, useEffect } from "react";

export function useFavorites () {
  const [favorites, setFavorites] = useState<number[]>([]);
  
  
  // ===== Load favorites from local storage when start
  useEffect(()=> {
    // Converts the stored JSON string into a JavaScript array.
    const savedFavs = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(savedFavs)
  },[]);
// Add or Remove favorite movie ========

/**
   * Updates the favorite movie list:
   * - If the movie is already favorited, remove it.
   * - If not, add it to favorites.
   *
   * @param {number} movieId - The ID of the movie to add/remove.
   */

function updatefavorites(movieId:number) {
  const updatedFavorites = favorites.includes(movieId) ? favorites.filter((id)=> id !== movieId)
  : [...favorites, movieId];
  setFavorites(updatedFavorites);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}
return {favorites, updatefavorites}
};