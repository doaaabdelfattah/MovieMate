import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full relative bg-mainDark border-t-2 border-mainLight mt-auto">
      {/* ====== gradient effect======= */}
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[200px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ad6df480] opacity-50 blur-[80px]"></div>

      <div className=" mx-5 pt-5 mt-12 pb-10 flex flex-col lg:flex-row items-center justify-between z-50 text-white gap-10  border-b-2 border-mainLight">
        <div className="lg:w-1/3 mx-12 w-full flex flex-col">
          <Link
            href="/"
            className={`md:text-5xl font-serif font-black text-lightColor text-4xl `}
          >
            MovieMate.
          </Link>
          <span className="text-mainLight">
            Cinema Nights, Family Delights!
          </span>
        </div>
        <div className="w-full lg:w-2/3 py-10 flex items-center  justify-around px-2 max-sm:grid max-sm:grid-cols-1 max-sm:items-center gap-10 ">
          {/* first Section =================== */}

          <div className="flex flex-col text-left gap-4">
            <h2 className="text-2xl ">Useful Links</h2>
            <ul className="text-md gap-3 flex flex-col tracking-wider">
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="/">Home</Link>
              </li>
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="/movies">Discover Movies</Link>
              </li>
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="/favorites">My favorites</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Contact</h2>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-md">
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <Link
                  href="mailto:elafacademy17@gmail.com"
                  className="hover:text-white/70 duration-300 transition-all"
                >
                  doaa.abdalfattah@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub size={20} />
                <Link
                  href="https://github.com/doaaabdelfattah"
                  className="hover:text-white/70 duration-300 transition-all"
                >
                  doaaabdelfattah
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white mx-20 py-3  flex flex-col justify-center  text-sm font-normal z-50 ">
        <p className="text-center tracking-widest">
          © Copyright 2025 | All Rights Reserved | Developer. Doaa Abdelfattah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
