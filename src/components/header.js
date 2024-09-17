import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" fixed bg-blue-400 container">
      <div className="relative h-16 flex items-center justify-between px-4 md:px-10">
        <div className="bg-pink-300 h-full w-1/3 md:w-1/6 flex items-center justify-center">
          <a href="home" className="text-sm md:text-lg font-bold">
            Logo
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

          <div className="relative group">
            <a
              href="#"
              className="block text-black text-sm md:text-lg py-2 md:py-0 w-full text-center"
            >
              Guilds
            </a>

            <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 rounded shadow-md py-2 z-10">
              <a
                href="artisans"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                ARTISANS
              </a>
              <a
                href="artists"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                ARTISTS
              </a>
              <a
                href="collectors"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                COLLECTORS
              </a>
              <a
                href="cosplayers"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                COSPLAYERS
              </a>
              <a
                href="merchants"
                className="block px-4 py-2 text-black hover:bg-gray-100"
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
