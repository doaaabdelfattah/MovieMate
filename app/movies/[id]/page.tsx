import AddToFavButton from "@/components/reusable/AddToFavButton";
import Rating from "@/components/reusable/Rating";
import { fetchMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = Number(params.id);

  const movieDetails = await fetchMovieDetails(movieId);

  if (isNaN(movieId)) {
    return <h1>Invalid Movie ID</h1>;
  }

  return (
    <div className="w-full ">
      <div
        className="w-full h-[300px] bg-red-200 overflow-hidden object-top bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
        }}
      >
        {/* <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          width={500}
          height={500}
          alt="poster"
          className="w-full h-full object-cover bg-scroll -pt-10"
        /> */}
      </div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-10 h-[700px] mt-20">
          {/* ========== Left : Poster */}
          <div
            className=" w-full md:w-1/3 bg-cover bg-center cursor-pointer flex items-start shadow-lg
      
      "
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              width={500}
              height={500}
              alt="poster"
              className="w-full h-auto"
            />
          </div>

          {/* ========== Right : Movie Data */}
          <div className=" w-full md:w-2/3 px-5 mt-10 flex flex-col items-start gap-1">
            <h1 className="text-4xl font-black">{movieDetails.title}</h1>
            <div className="flex gap-6 text-normal font-light">
              {movieDetails.genres.map((genre) => genre.name).join(" | ")}
            </div>

            <div className="flex items-center justify-between gap-10">
              <Rating vote={movieDetails.vote_average} />
              {/* <FavoriteBtn movieId={movieDetails.id}/> */}
              <AddToFavButton movieId={movieId} type="secondary" />
            </div>
            <article>
              <h2 className="font-semibold text-xl border-b border-white/50 pb-3 block">
                {movieDetails.tagline}
              </h2>
              <p className="text-md text-left py-3">{movieDetails.overview}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
