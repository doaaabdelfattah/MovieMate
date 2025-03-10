"use client";
import { FaStar } from "react-icons/fa6";
import styled from "styled-components";

const StyledRating = styled.span<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  color: #ff9529;
  font-weight: 600;
  font-size: ${(props) => props.size};
  letter-spacing: 1px;
`;

interface RatingProps {
  vote: number;
  size?: "small" | "medium" | "large";
}

const Rating: React.FC<RatingProps> = ({ vote, size = "medium" }) => {
  return (
    <StyledRating size={size}>
      <FaStar size={size === "small" ? 12 : size === "large" ? 24 : 16} />
      {vote}/10
    </StyledRating>
  );
};

export default Rating;
