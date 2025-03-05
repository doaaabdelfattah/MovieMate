const API_KEY = process.env.TMDB_API_KEY
const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN

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





// ======= Fetch movie details by id ==============
export async function fetchMovieDetails(movieId: number) {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzAwMjQ2Yjc1Yjk5MTI4MjgyZTllNTMzMTNhMjMxMyIsIm5iZiI6MTczNzMyMzk2OC4zMDQsInN1YiI6IjY3OGQ3NWMwZGNiNmU4MzlmMzQyZjhlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sfhJvi0Qp-7kjKyBvB4yyt4gYrfmnq9BCN3tnf6pxZM'
  //   }
  // };
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };






  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
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