"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/assets/logo/ransaini.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNav = () => {
    setShowNavbar(!showNavbar);
  };
  const [activeNav, setActiveNav] = useState("home");
  return (
    <header className="overflow-hidden">
      <div className="header__container flex items-center justify-between px-5 py-5">
        <div className="w-16">
          <Image src={Logo} alt={"Technical Ranasaini Logo"} />
        </div>
        <nav className="hidden sm:flex flex-1 items-center gap-20 sm:gap-8 md:text-[8px] px-20 text-[0.875rem] leading-[1.7]">
          <a
            onClick={() => setActiveNav("home")}
            className={`nav-link ${
              activeNav === "home"
                ? "text-black-800 font-bold"
                : "text-gray-800"
            }`}
            href="#"
          >
            home
          </a>
          <a
            onClick={() => setActiveNav("services")}
            className={`${
              activeNav === "services"
                ? "text-black font-bold"
                : "text-gray-800"
            } nav-link`}
            href="#"
          >
            services
          </a>
          <a
            onClick={() => setActiveNav("contact")}
            className={`${
              activeNav === "contact" ? "text-black font-bold" : "text-gray-800"
            } nav-link`}
            href="#"
          >
            contact
          </a>
          <a
            onClick={() => setActiveNav("about")}
            className={`nav-link ${
              activeNav === "about " ? "text-black font-bold" : "text-gray-800"
            }`}
            href="#"
          >
            about
          </a>
          <a
            onClick={() => setActiveNav("resources")}
            className={`nav-link ${
              activeNav === "resources"
                ? "text-black-800 font-bold"
                : "text-gray-800"
            }`}
            href="#"
          >
            resources
          </a>
        </nav>
        <div className="sm:visible">
          <button className="text-center tracking-widest text-[0.7rem] rounded-md bg-body-color px-3 py-2 hover:bg-orange-500 text-white">
            Build with us
          </button>
        </div>
        <div className="sm:hidden">
          {showNavbar ? (
            <AiOutlineClose
              className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out"
              onClick={toggleNav}
            />
          ) : (
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer "
              onClick={toggleNav}
            />
          )}
        </div>
      </div>

      {showNavbar && (
        <div className="mobile-nav flex flex-col gap-4 bg-header items-center text-[1rem] leading-[1.7] md:hidden">
          <a
            onClick={() => setActiveNav("home")}
            className={`${
              activeNav === "home"
                ? "text-black-800 font-bold"
                : "text-gray-800"
            }`}
            href="#"
          >
            home
          </a>
          <a
            onClick={() => setActiveNav("services")}
            className={`${
              activeNav === "services"
                ? "text-black font-bold"
                : "text-gray-800"
            }`}
            href="#"
          >
            services
          </a>
          <a
            onClick={() => setActiveNav("contact")}
            className={`${
              activeNav === "contact" ? "text-black font-bold" : "text-gray-800"
            }`}
            href="#"
          >
            contact
          </a>
          <a
            onClick={() => setActiveNav("about")}
            className={`${
              activeNav === "about" ? "text-black font-bold" : "text-gray-800"
            }`}
            href="#"
          >
            about
          </a>
          <a
            onClick={() => setActiveNav("resources")}
            className={`${
              activeNav === "resources"
                ? "text-black-800 font-bold"
                : "text-gray-800"
            }`}
            href="#"
          >
            resources
          </a>
          <div className="w-[90%] ">
            <button className="text-center text-white rounded-md w-full hover:bg-orange-500 bg-body-color px-2 py-2 text-1.1rem font-bold uppercase">
              Build with us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
