import { MoviesResponse } from "./types";

// ===== filtyer movies based on a key and value (movieArray, searchKey, searchValue, limit)

export function filterMovies(
  movies: MoviesResponse,
  key: keyof (typeof movies.results)[0],
  value: any,
  limit: number
) {
  return movies.results.filter((movie) => movie[key] === value).slice(0, limit);
}

// ======= get Genre names after fetching them
export function getGenreNames(
  genreIds: number[],
  genreMap: Record<number, string>
): string[] {
  return genreIds.map((id) => genreMap[id] || "Unknown");
}

//===== Filter movie based on genre
export function filterMoviesByGenre(
  movies: MoviesResponse,
  genreIds: number[], // Accept multiple genres
  limit?: number
) {
  const filteredMovies = movies.results.filter(
    (movie) => movie.genre_ids.some((id) => genreIds.includes(id)) // Match at least one genre
  );

  return limit ? filteredMovies.slice(0, limit) : filteredMovies;
}

// ===== Filter movie based on genre
// export function filterMoviesByGenre(
//   movies: MoviesResponse,
//   genreId: number,
//   limit: number
// ) {
//   return movies.results
//     .filter((movie) => movie.genre_ids.includes(genreId))
//     .slice(0, limit);
// }
