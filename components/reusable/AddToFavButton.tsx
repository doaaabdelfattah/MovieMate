"use client"
import React from "react";
import styled from "styled-components";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from '@/hooks/useFavorites';
interface AddToFavButtonProps {
movieId: number ;
}

const Button = styled.button`
background-color: none;
border: 1px;
border-radius: 5px;
border: white;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color:white;
padding: 0.75rem;
font-size:18px;
font-weight: 500;


&:hover {
  background-color: white;
}


`




const AddToFavButton: React.FC<AddToFavButtonProps> = ({movieId}) => {

const { favorites, updateFavorites } = useFavorites();

  return (
    <Button onClick={()=>updateFavorites(movieId)}>

{favorites.includes(movieId) ? "Remove from Favorites" : "Add to Favorites"}
      {favorites.includes(movieId) ? 
      <> <FaHeart />
      </>
      : 
      <><FaRegHeart />
      </>
      
      }

    </Button>
  )
}

export default AddToFavButton