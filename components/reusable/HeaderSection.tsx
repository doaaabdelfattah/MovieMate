"use client";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem); /* Responsive font size */
  line-height: 1.25;
  position: relative;
  display: block;
  font-weight: 600;
  text-align: left;

  color: white;
  min-width: 15%;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    margin-left: 10px;
    background-color: #ab6cf4;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(0.5rem, 2.1vw, 1.5rem);
  // font-size: 1.2rem;
  font-weight: 300;
  color: #cfd4e6;
`;

interface HeaderSectionProps {
  title: string;
  subtitle?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
};

export default HeaderSection;
