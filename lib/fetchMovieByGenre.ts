import { Movie } from "@/lib/types";
import { TMDB_CONFIG } from "@/lib/tmdb"; // Ensure you have TMDB settings configured

export const fetchMoviesByGenre = async (
  genreId: number,
  page = 1,
  sortBy:
    | "popularity.desc"
    | "popularity.asc"
    | "release_date.desc"
    | "release_date.asc" = "popularity.desc" // Default sorting
): Promise<Movie[]> => {
  if (!genreId) throw new Error("Genre ID is required");

  const endpoint = `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&with_genres=${genreId}&page=${page}&sort_by=${sortBy}`;

  console.log("Fetching movies by genre from:", endpoint);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results || [];
};
