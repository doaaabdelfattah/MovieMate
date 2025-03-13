import { MoviesResponse } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Accoordin: React.FC<MoviesResponse> = ({ movies }) => {
  return (
    <ul className="accordion">
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://placehold.co/550x400/1a1a1a/FFFFFF.png`
              }
              alt={movie.title}
              height={550}
              width={400}
              className=""
              quality={80}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Accoordin;
