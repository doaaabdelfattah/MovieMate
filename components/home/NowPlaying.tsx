import React from "react";
import HeaderSection from "../reusable/HeaderSection";
import MoviesList from "./MovieList";
const NowPlaying = ({ movies }) => {
  return (
    <div className="container mx-auto my-20">
      <div className="w-full  pr-3">
        <HeaderSection title="Now Playing" />
      </div>
      <MoviesList />
      <div></div>
    </div>
  );
};

export default NowPlaying;
