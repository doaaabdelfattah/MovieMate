"use client"
import React, { useEffect, useState } from 'react'

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from '@/hooks/useFavorites';
interface AddToFavButtonProps {
movieId: number ;
}


const AddToFavButton: React.FC<AddToFavButtonProps> = ({movieId}) => {

const { favorites, updateFavorites } = useFavorites();

  return (
    <button className='bg-white rounded-md shadow-md flex items-center justify-center gap-2 text-black p-3 text-lg font-medium' onClick={()=>updateFavorites(movieId)}>

{favorites.includes(movieId) ? "Remove from Favorites" : "Add to Favorites"}
      {favorites.includes(movieId) ? 
      <> <FaHeart />
      </>
      : 
      <><FaRegHeart />
      </>
      
      }

    </button>
  )
}

export default AddToFavButton