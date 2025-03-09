const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";
import { fetchMoviesProps } from "./types";

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
    ? data.results.filter((movie) =>
        movie.genre_ids.some((id) => genre.includes(id))
      )
    : data.results; // If no genre filter, return all

  return { ...data, results: filteredMovies };
};

// Fetch Popular Movies ==========
export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}

// Fetch Popular Movies ==========
export async function fetchTopRatedMovies() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch  movies");
  return res.json();
}

// Fetch Upcoming Movies ==========
export async function fetchUpcomingMovies() {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}
// Fetch Upcoming Movies ==========
export async function fetchNowPlayingMovies() {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch now playing movies");
  return res.json();
}

export async function fetchPopularTvs() {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}

// ======= Fetch movie details by id ==============
export async function fetchMovieDetails(movieId: number) {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzAwMjQ2Yjc1Yjk5MTI4MjgyZTllNTMzMTNhMjMxMyIsIm5iZiI6MTczNzMyMzk2OC4zMDQsInN1YiI6IjY3OGQ3NWMwZGNiNmU4MzlmMzQyZjhlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfhJvi0Qp-7kjKyBvB4yyt4gYrfmnq9BCN3tnf6pxZM",
  //   },
  // };
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

// export async function fetchMovieDetails(movieId: number) {
//   try {
//     const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching movie details:", error);
//     return null; // Return null instead of crashing the app
//   }
// }

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
