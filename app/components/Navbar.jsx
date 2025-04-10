"use client";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 500) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header-image"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${
          isScroll
            ? "bg-opacity-50 backdrop-blur shadow-sm dark:bg-[#11001F] dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo : assets.logo_dark}
            className="w-20 mr-14 mt-1 md:mt-0 cursor-pointer"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2.5 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className="font-[Ovo]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-[Ovo]">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-[Ovo]">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-[Ovo]">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-[Ovo]">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="toggle"
              className="w-5 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-1.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="icon"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="toggle"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile  */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="cross"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-[Ovo]" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-[Ovo]" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-[Ovo]" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-[Ovo]" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-[Ovo]" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
