"use client";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  // padding: 20px;
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
  font-size: 1.5em;
  line-height: 1.25;
  position: relative;
  display: block;
  font-weight: 400;
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
    bg-opacity: 0.5;
    // margin-top: 10px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
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
