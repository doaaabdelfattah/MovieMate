import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "optional",
});

export const metadata = {
  title: "MovieMate",
  description:
    "Find the best movies and TV shows with personalized recommendations. Browse top-rated films, upcoming releases, and trending series – all powered by TMDB API.",
  keywords:
    "movies, TV shows, film recommendations, trending movies, best movies, TMDB API, watch online, entertainment, film reviews",
  openGraph: {
    title: "Discover the Best Movies & TV Shows | MovieMate",
    description:
      "TGet the latest movie recommendations, ratings, and trending films. Powered by TMDB API.",
    type: "website",
    url: "https://moviemate-dusky.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${opensans.className} antialiased min-h-screen flex flex-col justify-between leading-8 `}
        style={{ fontFamily: "Open Sans, Arial, sans-serif" }}
      >
        <div className="">
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
