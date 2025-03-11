export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MoviesResponse {
  results: Movie[];
}

export interface fetchMoviesProps {
  category: string;
  currentPage?: number;
  genre?: number[];
}

export interface MovieProps {
  movie: Movie;
  genreMap?: Record<number, string>;
}
