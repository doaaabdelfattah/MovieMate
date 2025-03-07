import React, { useState } from 'react'
import { fetchMovieDetails } from '@/lib/tmdb';
import { Movie } from '@/lib/types';


const MovieCard: React.FC<Movie> = ({movie}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
    className="relative w-full h-[300px] bg-cover bg-center cursor-pointer transition-all duration-300     
    "
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
    }}
    onMouseEnter={() => setShowDetails(true)}
    onMouseLeave={() => setShowDetails(false)}
    key={movie.id}
  >
    </div>
  )
}

export default MovieCard