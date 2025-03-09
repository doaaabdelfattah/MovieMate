import { fetchPopularMovies, fetchPopularTvs } from "@/lib/tmdb";
import Image from "next/image";
import { MoviesResponse } from "@/lib/types";

export default async function MoviesPage() {
  const movies: MoviesResponse = await fetchPopularMovies();

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.results.map((movie) => (
          <li key={movie.id}>
            {movie.title}

            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={200}
              className=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
