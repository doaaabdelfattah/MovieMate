
import AddToFavButton from "@/components/reusable/AddToFavButton";
import Rating from "@/components/reusable/Rating";
import { fetchMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function MoviePage({ params }: { params: { id: string } }) {

const movieId = Number(params.id);
if (isNaN(movieId)) {
  return <h1>Invalid Movie ID</h1>; 
}
  const movieDetails = await fetchMovieDetails(movieId);

  console.log(movieDetails);
  
  return (
    <div className="container mx-auto">

    <div className="flex flex-col md:flex-row bg-grey-300 h-[700px] mt-20">
      
      {/* ========== Left : Poster */}
      <div className="bg-gray-100 w-full md:w-1/3 bg-cover bg-center cursor-pointer shadow-lg
      
      "
    >
        <Image src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} width={500} height={500} alt="poster" className="w-full h-auto"/>
   
      </div>

       {/* ========== Right : Movie Data */}
      <div className=" w-full md:w-2/3 px-5 mt-10 flex flex-col items-start gap-3">

        <h1 className="text-3xl font-black">{movieDetails.title}</h1>
        <div className="flex items-center justify-start" >
          
<Rating vote={movieDetails.vote_average}/>
<AddToFavButton movieId={movieId}/>
          
        </div>
      </div>

    </div>
    </div>
  )
  
}
