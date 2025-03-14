"use client";
import React from "react";
import styled from "styled-components";

import { useFavorites } from "@/hooks/useFavorites";
import { Heart } from "lucide-react";

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
`;

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ movieId }) => {
  const { favorites, updateFavorites } = useFavorites();
  const isFavorite = favorites.includes(movieId);
  return (
    <StyledFavoriteBtn
      className={`${isFavorite ? "active" : ""}`}
      onClick={() => updateFavorites(movieId)}
    >
      {isFavorite ? <Heart fill="#fff" size={20} /> : <Heart size={20} />}
    </StyledFavoriteBtn>
  );
};

export default FavoriteBtn;
