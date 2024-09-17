import React from "react";

const Header = () => {
  return (
    <header className="relative h-16 flex items-center">
      <div className="bg-pink-300 h-full w-1/6 flex items-center justify-center">
        <span className="text-lg font-bold">Logo</span>
      </div>

      <div className="bg-blue-400 h-full flex-1 flex justify-end items-center space-x-10 pr-10 relative">
        <a href="#" className="text-black text-lg">
          Home
        </a>
        <a href="#" className="text-black text-lg">
          About
        </a>

        <div className="relative group">
          <a href="#" className="text-black text-lg ">
            Guilds
          </a>

          <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 rounded shadow-md py-2">
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              ARTISANS
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              ARTISTS
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              COLLECTORS
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              COSPLAYERS
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              MERCHANTS
            </a>
          </div>
        </div>

        <a href="#" className="text-black text-lg">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
