"use client";
import React from "react";
import styled from "styled-components";

const HeartContainer = styled.div`
  --heart-color: rgb(255, 91, 137);
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--heart-color);
    position: absolute;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .filled {
    transform: scale(0);
    opacity: 0;
  }

  .celebrate {
    transform: scale(0);
    opacity: 0;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  &.active {
    .filled {
      transform: scale(1);
      opacity: 1;
      animation: pop 0.5s;
    }

    .celebrate {
      animation: explode 0.5s forwards;
    }
  }

  @keyframes pop {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }

  @keyframes explode {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      filter: brightness(1.5);
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
`;

interface HeartButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <HeartContainer className={isFavorite ? "active" : ""} onClick={onClick}>
      {/* Empty Heart */}
      <svg viewBox="0 0 24 24" width="50" height="50">
        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
      </svg>

      {/* Filled Heart */}
      <svg viewBox="0 0 24 24" width="50" height="50" className="filled">
        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
      </svg>

      {/* Celebration Effect */}
      <svg width="100" height="100" className="celebrate">
        <polygon points="10,10 20,20"></polygon>
        <polygon points="10,50 20,50"></polygon>
        <polygon points="20,80 30,70"></polygon>
        <polygon points="90,10 80,20"></polygon>
        <polygon points="90,50 80,50"></polygon>
        <polygon points="80,80 70,70"></polygon>
      </svg>
    </HeartContainer>
  );
};

export default HeartButton;
