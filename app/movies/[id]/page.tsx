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
  // const images = await fetchMovieImages(movieId);
  // const movieDetails = await fetchMovieDetails(movieId);

  const [movieDetails, images] = await Promise.all([
    fetchMovieDetails(movieId),
    fetchMovieImages(movieId),
  ]);

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
              src={`https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`}
              width={500}
              height={750}
              alt="poster"
              className=""
              priority
            />
          </div>

          {/* ========== Right : Movie Data ======== */}
          <div className="w-full lg:w-2/3 px-5 lg:mt-30 mt-10 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-black">{movieDetails.title}</h1>
            <div className="flex flex-wrap gap-2 text-normal mt-5 font-light">
              {movieDetails.genres.map(
                (genre: { name: string }, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accentColor-300 text-white rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                )
              )}
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

            {/* ============= Second Section =========== */}

            <div className="flex flex-col justify-between items-start gap-5 lg:flex-row w-full">
              <div className="mt-6 space-y-3 text-lg">
                <p>
                  <strong>Release Date:</strong>{" "}
                  {new Date(movieDetails.release_date).toDateString()}
                </p>
                <p>
                  <strong>Runtime:</strong>{" "}
                  {Math.floor(movieDetails.runtime / 60)}h{" "}
                  {movieDetails.runtime % 60}m
                </p>
                <p>
                  <strong>Budget:</strong> $
                  {movieDetails.budget.toLocaleString()}
                </p>
                <p>
                  <strong>Revenue:</strong> $
                  {movieDetails.revenue.toLocaleString()}
                </p>
                <p>
                  <strong>Spoken Languages:</strong>{" "}
                  {movieDetails.spoken_languages
                    .map((lang: { name: string }) => lang.name)
                    .join(", ")}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold">Production Companies:</h3>
                <div className="flex flex-wrap gap-4  mt-3">
                  {movieDetails.production_companies.map(
                    (
                      company: { name: string; logo_path: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg"
                      >
                        <span className="text-white border-accentColor border rounded-2xl p-3">
                          {company.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto flex items-center justify-center gap-20 flex-col my-30">
        <h2 className="text-center text-lg bg-accentColor-300 backdrop-blur-2xl rounded-full py-3 px-6 font-bold inline-block">
          Image Gallery
        </h2>

        <div className="w-full">
          {images?.backdrops && (
            <ImageCarousel
              slides={images.backdrops.map(
                (img: { file_path: string }, index: number) => ({
                  image: `https://image.tmdb.org/t/p/w1280${img.file_path}`,
                  title: `Slider-Image-${index}`,
                })
              )}
            />
          )}
        </div>
      </section>
    </div>
  );
}
