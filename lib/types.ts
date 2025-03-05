export type Movie = {
  adult: boolean,
      backdrop_path: string,
      // genre_ids: [Array],
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date:string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number
}

export type MoviesResponse = {
  results: Movie[];
}


export interface MovieProps {
  movie: Movie;
}