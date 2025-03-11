"use client";
import React from "react";
import styled from "styled-components";
// import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "@/hooks/useFavorites";

interface AddToFavButtonProps {
  movieId: number;
  type?: "primary" | "secondary";
}

const StyledButton = styled.button<{ $type: "primary" | "secondary" }>`
  background-color: none;
  border: 1px;
  border-radius: 6px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  padding: 0.5rem;
  font-size: 15px;
  font-weight: 400;
  min-width: fit-content;
  cursor: pointer;
  transition: background-color 0.5s linear, color 0.5s linear,
    box-shadow 0.3s ease-in-out;
  &.active svg {
    color: red;
  }

  ${({ $type }) =>
    $type === "primary"
      ? `
  background-color: transparent;
    border: 1.5px solid grey;
    color: white;

    &:hover {
      background-color: #ffffffda;
      color: black;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  `
      : `
  background: none;
    border: none;
    // color: black;
    font-size: 15px;
    font-weight: 400;
    // box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover {
      // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      
    }
  `}
`;

const AddToFavButton: React.FC<AddToFavButtonProps> = ({
  movieId,
  type = "primary",
}) => {
  const { favorites, updateFavorites } = useFavorites();
  // const [isFavorite, setIsFavorite] = useState(favorites.includes(movieId));

  // useEffect(() => {
  //   setIsFavorite(favorites.includes(movieId));
  // }, [favorites, movieId]);

  // const handleClick = () => {
  //   updateFavorites(movieId);
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <StyledButton
      className="group"
      onClick={() => updateFavorites(movieId)}
      $type={type}
    >
      {favorites.includes(movieId)
        ? "Remove from Favorites"
        : "Add to Favorites"}
      {favorites.includes(movieId) ? (
        <>
          {" "}
          <FaHeart />
        </>
      ) : (
        <>
          <FaRegHeart />
        </>
      )}
    </StyledButton>
  );
};

export default AddToFavButton;
