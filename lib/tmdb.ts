const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"


// Fetch Popular Movies ==========
export async function fetchPopularMovies () {
  const res = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}
// Fetch Latest Movies ==========
export async function fetchUpcomingMovies () {
  const res = await fetch (`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}




export async function fetchPopularTvs () {
  const res = await fetch (`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
}





// Fetch movie details by ID
export async function fetchMovieDetails(movieId: string) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}