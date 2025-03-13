import AddToFavButton from "@/components/reusable/AddToFavButton";
import ImageCarousel from "@/components/reusable/ImageCarousel";
import Rating from "@/components/reusable/Rating";
import { fetchMovieDetails, fetchMovieImages } from "@/lib/tmdb";
import Image from "next/image";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movieId = Number(id);
  const images = await fetchMovieImages(movieId);

  const movieDetails = await fetchMovieDetails(movieId);

  if (isNaN(movieId)) {
    return <h1>Invalid Movie ID</h1>;
  }

  return (
    <div className="w-ful">
      {/* ======= Header ======= */}

      <div
        className="w-full h-[500px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
      </div>

      {/* ======= Page content */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 -mt-20">
          {/* ========== Left : Poster */}
          <div className=" w-full lg:w-1/3 flex items-center justify-center shadow-lg ">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              width={500}
              height={750}
              alt="poster"
              className=""
              priority
            />
          </div>

          {/* ========== Right : Movie Data ======== */}
          <div className="w-full lg:w-2/3 px-5 mt-10 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-black">{movieDetails.title}</h1>
            <div className="flex gap-6 text-normal font-light">
              {movieDetails.genres
                .map((genre: { name: string }) => genre.name)
                .join(" | ")}
            </div>

            <div className="flex items-center justify-between my-2 gap-10">
              <Rating vote={movieDetails.vote_average} />
              {/* <FavoriteBtn movieId={movieDetails.id}/> */}
              <AddToFavButton movieId={movieId} type="secondary" />
            </div>
            <article>
              <h2 className="font-semibold text-xl border-b-[1.5px] border-white/50 pb-2">
                {movieDetails.tagline}
              </h2>
              <p className="text-lg text-left py-4">{movieDetails.overview}</p>
            </article>
          </div>
        </div>
      </div>
      <div className="w-full my-30">
        {images?.backdrops && (
          <ImageCarousel
            slides={images.backdrops.map(
              (img: { file_path: string }, index: number) => ({
                image: `https://image.tmdb.org/t/p/original${img.file_path}`,
                title: `Slider-Image-${index}`,
              })
            )}
          />
        )}
      </div>
    </div>
  );
}
