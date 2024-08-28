"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/assets/logo/letterheadfull.png";
import logos from "../../../public/assets/logo/akhil_logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNav = () => {
    setShowNavbar(!showNavbar);
  };
  const [activeNav, setActiveNav] = useState("home");

  const urls = ["Home", "About Us", "Services", "Contact"];
  

  return (
    <header className="overflow-hidden">
      <div className="flex justify-between mt-2 sm:hidden mx-3 items-center">
        <Image src={Logo} className=" w-1/2 sm:w-1/3 " alt={"letterhead"} />
        <div className="sm:hidden ">
          {showNavbar ? (
            <AiOutlineClose
              className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out"
              onClick={toggleNav}
            />
          ) : (
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer sm:hidden"
              onClick={toggleNav}
            />
          )}
        </div>
      </div>

      <div className="header__container flex items-center justify-between p-5 lg:px-8 lg:py-7">
        <div className="w-16 xxs:order-2 hidden sm:visible ssx:order-1 lg:w-24  ">
          <Image src={Logo} alt={"Technical Ranasaini Logo"} />
        </div>
        <nav className="hidden md:flex  sm:visible flex-1 items-center gap-20 sm:gap-8 lg:gap-9 xl:gap-24 px-20 text-[0.875rem] ">
          {urls.map((menu: any, index: number) => (
            <a
              key={index}
              onClick={() => setActiveNav(menu)}
              className={`nav-link md:text-[1.1rem] lg:text-[1.3rem] ${
                activeNav === menu
                  ? "text-black-800 font-bold"
                  : "text-gray-800"
              }`}
              href={menu}
            >
              {menu}
            </a>
          ))}
        </nav>
      </div>

      {showNavbar && (
        <div className="mobile-nav flex flex-col gap-4 bg-header items-center text-[1rem] leading-[1.7]">
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
            <button className="text-center text-white rounded-md w-full hover:bg-orange-500 bg-blue-900 px-2 py-2 text-1.1rem font-bold uppercase">
              Build with us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
