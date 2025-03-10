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
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem); /* Responsive font size */
  line-height: 1.25;
  position: relative;
  display: block;
  font-weight: 500;
  text-align: left;
  margin-bottom: 15px;
  color: white;
  min-width: 15%;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    margin-left: 10px;
    background-color: #e2e5ef;
    opacity: 0.5;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.8rem); /* Adjust subtitle size */
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
