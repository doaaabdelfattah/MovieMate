import Hero from "@/components/home/Hero";
import LatestMovies from "@/components/home/LatestMovies";
// import NowPlaying from "@/components/home/NowPlaying";
import TopRatedMovies from "@/components/home/TopRatedMovies";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <TopRatedMovies />
      <LatestMovies />
    </div>
  );
}
