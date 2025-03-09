import Hero from "@/components/home/Hero";
import NowPlaying from "@/components/home/NowPlaying";
import TopRatedMovies from "@/components/home/TopRatedMovies";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/lib/tmdb";
import { MoviesResponse } from "@/lib/types";
import { filterMoviesByGenre } from "@/lib/utils";

export default async function Home() {
  // Fetch Movies ============
  const movies: MoviesResponse = await fetchPopularMovies();
  const topRatedMovies: MoviesResponse = await fetchTopRatedMovies();
  const nowPlayingMovies: MoviesResponse = await fetchNowPlayingMovies();

  // Filter Movies by Genre ============
  const fileteredTopRated = filterMoviesByGenre(
    topRatedMovies,
    [16, 10751, 878, 12]
  );
  const filteredNowPlayingMovies = filterMoviesByGenre(
    nowPlayingMovies,
    [16, 10751, 878, 12]
  );
  return (
    <div className="bg-darkColorSec">
      <Hero />
      <TopRatedMovies movies={fileteredTopRated} />
      <NowPlaying movies={filteredNowPlayingMovies} />
    </div>
  );
}
