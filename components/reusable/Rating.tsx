"use client"
import { FaStar } from "react-icons/fa6";
import styled from "styled-components";

const StyledRating = styled.span`
  display: flex;
align-items: center;
justify-content: start;
gap: 0.5rem;
color:#FF9529;
font-weight: 600;
font-size: medium;
letter-spacing: 1px;

`

interface RatingProps {
  vote: number;
}
const Rating: React.FC<RatingProps> = ({vote}) => {
  return (
      
      <StyledRating >
        <FaStar /> {vote}/10
        </StyledRating>
  )
}

export default Rating