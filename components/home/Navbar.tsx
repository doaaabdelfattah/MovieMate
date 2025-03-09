"use client";

import { FaHeart } from "react-icons/fa6";
import React, { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);

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
        className={`w-full sm:px-10 px-3 py-2 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 h-[90px] 
          ${
            isScroll
              ? "backdrop-blur-lg text-black shadow-sm fixed"
              : "bg-darkColor text-white"
          } `}
      >
        <Link
          href="/"
          className={`text-4xl font-serif font-black${
            isScroll ? " text-darkColor" : "text-white"
          } `}
        >
          MovieMate.
        </Link>
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 text-lg py-4">
          <li className="slide-up-hover">
            <Link className="menu-style" href="/">
              Home
            </Link>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#top">
              Best Sellers
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4">
          <Link href="/favorites">
            <button className="cursor-pointer py-2 px-3 rounded-md flex items-center justify-center  hover:bg-white/10  transition-all duratioen-300 gap-2">
              My Favorites <FaHeart />
            </button>
          </Link>
          <button className="lg:hidden hover:bg-white/10 p-2 rounded-md  transition-all duratioen-300 cursor-pointer">
            <GiHamburgerMenu onClick={openMenu} size={25} />
          </button>
        </div>

        {/*================ Mobile Menu ====================== */}
        <div
          className="flex lg:hidden flex-col gap-4 py-10 px-10 fixed -right-64 h-screen w-64 z-50 bg-gray-50 transition duration-700 bottom-0 top-0 text-black"
          ref={sideMenuRef}
        >
          <span
            className="absolute  right-6 top-6 hover:opacity-60 duration-75 transition-opacity"
            onClick={closeMenu}
          >
            <IoMdCloseCircleOutline size={20} className="cursor-pointer" />
          </span>
          <ul className="">
            <li className="slide-up-hover">
              <a className="menu-style" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" onClick={closeMenu}>
                About us
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#pricing" onClick={closeMenu}>
                Pricing
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" onClick={closeMenu}>
                Contact us
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#faq" onClick={closeMenu}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
