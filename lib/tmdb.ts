const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";
import { fetchMoviesProps } from "./types";
import { Movie } from "./types";

// --------- Configurations ------------
export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
  },
};

// ✅ - - - - - - custom fetch - - - - -

export const customFetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

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

// ============= ✅ ✅ ✅ ✅ ✅ ✅

export const fetchMoviesWithPage = async ({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}): Promise<{ movies: Movie[]; total_pages: number }> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
        query
      )}&page=${page}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`; // Added page

  console.log("endpoint", endpoint);
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

// ============== ✅ ✅ ✅ ✅ ✅ ✅
export const fetchMoviesCategory = async ({
  query,
  category = "discover", // Default to "discover"
  page = 1,
}: {
  query: string;
  page?: number;
  category?: string;
}): Promise<Movie[]> => {
  let endpoint;

  if (query) {
    // If there's a query, search for movies
    endpoint = `${TMDB_CONFIG.BASE_URL}/search/movie?api_key=${
      TMDB_CONFIG.API_KEY
    }&query=${encodeURIComponent(query)}&page=${page}`;
  } else if (category === "discover") {
    // Use the discover endpoint for all available movies
    endpoint = `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&page=${page}`;
  } else {
    // Fetch movies by specific category (popular, top_rated, upcoming, etc.)
    endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${category}?api_key=${TMDB_CONFIG.API_KEY}&page=${page}`;
  }

  console.log("Fetching from:", endpoint);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  const movies = data.results || [];

  // Define terms to exclude
  const excludedTerms = ["sex", "nudity", "erotic", "clitoris"];

  // Filter out movies with descriptions containing excluded terms
  const filteredMovies = movies.filter((movie: Movie) => {
    const description = movie.overview.toLowerCase();
    return !excludedTerms.some((term) => description.includes(term));
  });

  return filteredMovies;
};

// ==========
export const fetchMovieImages = async (movieId: number) => {
  const response = await fetch(
    `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/images`,
    {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch images: ${response.statusText}`);
  }

  const data = await response.json();
  return data; // Returns { backdrops: [], posters: [], logos: [] }
};

// - - - - - -  - - Dynamic FETCH Movies - - - - - - - - - - -
export const fetchMovies = async ({
  category,
  currentPage = 1,
  genre = [],
}: fetchMoviesProps) => {
  const res = await fetch(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${currentPage}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) throw new Error(`Failed to fetch ${category} movies`);

  const data = await res.json();

  const filteredMovies = genre.length
    ? data.results.filter((movie: Movie) =>
        movie.genre_ids.some((id) => genre.includes(id))
      )
    : data.results; // If no genre filter, return all

  return { ...data, results: filteredMovies };
};

// ======= Fetch movie details by id ==============
export async function fetchMovieDetails(movieId: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

// =========== Fetch Genre =============
export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch genres");

  const data = await res.json();

  // Convert the array into an object for quick lookup
  const genreMap: Record<number, string> = {};
  data.genres.forEach((genre: { id: number; name: string }) => {
    genreMap[genre.id] = genre.name;
  });

  return genreMap;
}
