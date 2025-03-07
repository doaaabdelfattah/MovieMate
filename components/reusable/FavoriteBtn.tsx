"use client";
import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "@/hooks/useFavorites";

interface FavoriteBtnProps {
  movieId: number;
  className?: string;
}
const StyledFavoriteBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    font-size: 1.8rem; 
    transition: color 0.3s ease-in-out;
  }

  &.active svg {
    color: red;
  }

`

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({movieId, className}) => {
const {favorites, updateFavorites} = useFavorites();
const isFavorite = favorites.includes(movieId);
  return (
  <StyledFavoriteBtn className={`${isFavorite ? "active" :""}`} onClick={()=>updateFavorites(movieId)}>
    {isFavorite ? <FaHeart/>: <FaRegHeart/>}
  </StyledFavoriteBtn>
)
};

export default FavoriteBtn;