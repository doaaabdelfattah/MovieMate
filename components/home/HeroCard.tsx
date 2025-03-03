"use client"
import React from 'react'
import { Movie } from '@/lib/types'
import { useState } from 'react';
interface HeroCardProps {
  movie: Movie;
}

const HeroCard : React.FC<HeroCardProps>= ({movie}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className='group relative w-1/3 h-screen bg-cover bg-center cursor-pointer transition-all duration-300 overflow-hidden'
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
    }}
    onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    
    >
      <div className="absolute inset-0 hover:bg-black/10 transition-all duration-700 bg-black/70"></div>
    
     {/* Movie Details */}

     <div
        className={`absolute bottom-0 left-0 w-full bg-black/80 text-white p-4 text-center transition-transform duration-500 ease-in-out
        ${showDetails ? "-translate-y-6/12" : "translate-y-full"}`}
      >
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p className="text-sm mt-2">{movie.overview}</p>
        <p className="mt-4 text-yellow-400">⭐ {movie.vote_average}/10</p>
      </div>
    </div>
  )
}

export default HeroCard