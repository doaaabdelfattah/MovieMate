"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "../reusable/SearchBar";
import { Search, Menu, Heart, CircleX } from "lucide-react";
export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMovieDetailPage = /^\/movies\/\d+$/.test(pathname);

  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <nav
        className={`w-full px-10 max-sm:px-5 mx-auto flex items-center justify-between z-50  top-0
        ${isMovieDetailPage ? "fixed" : ""}
          ${
            isScroll
              ? "backdrop-blur-lg h-[100px]  top-0 bg-mainLight/50  shadow-sm fixed left-0 max-md:px-8"
              : "bg-gradient-to-b h-[150px] from-mainDark/50 to-transparent text-lightColor"
          } `}
      >
        <Link
          href="/"
          className={`md:text-6xl  font-black text-lightColor text-4xl ${
            isScroll ? " " : ""
          } `}
        >
          <span className="letter-coloring">M</span>
          ovie<span className="letter-coloring">M</span>ate.
        </Link>
        <ul className="hidden lg:flex font-medium items-center gap-6 lg:gap-8 text-lg py-4">
          <li className="slide-up-hover">
            <Link className="hover:text-accentColor" href="/">
              Home
            </Link>
          </li>
          <li className="slide-up-hover">
            <Link className="hover:text-accentColor" href="/movies">
              Discover Movies
            </Link>
          </li>
          <li className="slide-up-hover">
            <Link className="hover:text-accentColor" href="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4 max-sm:gap-2 ">
          {!["/search", "/movies"].includes(pathname) && (
            <div className="hidden lg:block">
              <SearchBar
                handleOnClick={handleSearchClick}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeHolder="Search for a Movie"
                value={searchQuery}
                isScroll={isScroll}
              />
            </div>
          )}

          <Link
            href="/search"
            className="lg:hidden  cursor-pointer  rounded-full flex items-center justify-center hover:text-accentColor  transition-all duratioen-300"
          >
            {/* <FaMagnifyingGlass /> */}
            <Search />
          </Link>
          <Link href="/favorites" className="lg:hidden">
            <button
              className="cursor-pointer rounded-full text-lightColor flex items-center justify-center  transition-all group duratioen-300 gap-2"
              aria-label="Favorites"
            >
              <Heart
                className="group-hover:fill-accentColor group-hover:stroke-accentColor "
                size={25}
              />{" "}
              <span className="hidden lg:block hover:text-accentColor">
                My Favorites
              </span>
            </button>
          </Link>
          <button
            className="lg:hidden hover:text-accentColor rounded-md  transition-all duratioen-300 cursor-pointer"
            arial-label="side menu"
            title="Open side menu"
          >
            <Menu onClick={openMenu} size={25} />
            {/* <GiHamburgerMenu onClick={openMenu} size={25} /> */}
          </button>
        </div>

        {/*================ Mobile Menu ====================== */}
        <div
          className="flex lg:hidden flex-col gap-4 py-10 px-10 fixed -right-64 h-screen w-64 z-50 bg-lightColor transition duration-700 bottom-0 top-0 text-black"
          ref={sideMenuRef}
        >
          <span
            className="absolute  right-6 top-6 hover:opacity-60 duration-75 transition-opacity"
            onClick={closeMenu}
          >
            <CircleX size={20} className="cursor-pointer" />
          </span>
          <ul className="">
            <li className="slide-up-hover-x">
              <Link
                className="hover:text-accentColor"
                href="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="slide-up-hover-x">
              <Link
                className="hover:text-accentColor"
                href="/movies"
                onClick={closeMenu}
              >
                Discover Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
