import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" fixed bg-blue-400 container z-10">
      <div className="relative h-16 flex items-center justify-between px-4 md:px-10">
        <div className=" flex items-center ">
          <a href="home" className="text-sm md:text-lg font-bold">
            <img className="h-16" src={require("../assets/artistech.png")} />
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-400 md:flex md:relative md:top-0 md:left-0 md:w-auto md:bg-transparent items-center md:space-x-10 pr-4 md:px-10`}
        >
          <a
            href="home"
            className="block text-black text-sm md:text-lg py-2 md:py-0 w-full text-center"
          >
            Home
          </a>
          <a
            href="about"
            className="block text-black text-sm md:text-lg py-2 md:py-0 w-full text-center"
          >
            About
          </a>

          <div className="relative group bg-blue-400">
            <a
              href="#"
              className="block text-black text-sm md:text-lg py-2 md:py-0 w-full text-center"
            >
              Guilds
            </a>

            <div className="absolute hidden group-hover:block bg-blue-400 border border-gray-200 rounded shadow-md z-10">
              <a
                href="artisans"
                className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black sm:w-full"
              >
                ARTISANS
              </a>
              <a
                href="artists"
                className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black sm:w-full"
              >
                ARTISTS
              </a>
              <a
                href="collectors"
                className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black sm:w-full"
              >
                COLLECTORS
              </a>
              <a
                href="cosplayers"
                className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black sm:w-full"
              >
                COSPLAYERS
              </a>
              <a
                href="merchants"
                className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black sm:w-full"
              >
                MERCHANTS
              </a>
            </div>
          </div>

          <a
            href="contact"
            className="block text-black text-sm md:text-lg py-2 md:py-0 w-full text-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
