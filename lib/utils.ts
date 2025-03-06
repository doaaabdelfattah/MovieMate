import { MoviesResponse } from "./types";

export function filterMovies(movies: MoviesResponse, key: keyof typeof movies.results[0], value: any, limit: number) {
  return movies.results.filter((movie) => movie[key] === value).slice(0, limit);
}




// ======= get Genre names after fetching them
export function getGenreNames(genreIds: number[], genreMap: Record<number, string>): string[] {
  return genreIds.map((id) => genreMap[id] || "Unknown");
}