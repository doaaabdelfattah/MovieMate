import React, { useState } from 'react'
import { fetchMovieDetails } from '@/lib/tmdb';
import { Movie } from '@/lib/types';


const MovieCard: React.FC<Movie> = ({movie}) => {


  return (
    <div><p>{movie.id}</p></div>
  )
}

export default MovieCard