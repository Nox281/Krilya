import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md grid grid-cols-3 my-auto bg-white p-5 md:px-10 ">
      
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer ">
        <Image
          src="/../public/favicon.ico"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Center */}
      <div className="flex items-center border-2 rounded-full shadow-sm">
        <input
          type={"text"}
          placeholder="Search a Car"
          className="flex-grow text-sm placeholder-gray-400 text-gray-600  pl-4 outline-none bg-transparent"
        ></input>
        <SearchIcon className="hidden md:inline h-7 cursor-pointer bg-teal-300 rounded-full p-1.5 md:mx-1" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end pl-5">
        <p className="hidden md:inline-flex text-gray-600 cursor-pointer pl-4">
          Become a Renter
        </p>
        <GlobeAltIcon className="text-gray-500 h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 text-gray-500 cursor-pointer" />
          <UserCircleIcon className="h-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
