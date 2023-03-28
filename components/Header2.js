import React from "react";
import Image from "next/image";
import { MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

function Header() {
  const router = useRouter();

  return (
    <header className="fixed grid grid-cols-3 w-full top-0 z-50 shadow-md my-auto bg-white p-3 transition duration-200">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-11 w-11"
      >
        <Image
          src="/../public/favicon.ico"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>

      {/* Middle */}
      <div className="select-none relative h-fit flex justify-center transform transition-all duration-300 ">
        <SearchBar />
      </div>

      {/* Right */}
      <div className="flex items-center h-11 space-x-4 justify-end pl-5 w-full">
        <p className="hidden sm:inline-flex text-gray-900 cursor-pointer">
          Become a Host
        </p>
        {/* <GlobeAltIcon className="text-gray-500 h-6 cursor-pointer" /> */}
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 text-gray-600 cursor-pointer" />
          <UserCircleIcon className="h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-200 hidden md:block mt-2 col-span-full"></div>

      {/* Bottom */}
      <div className="pt-2 col-span-3 hidden gap-x-3 md:inline-flex whitespace-nowrap">
        <p className="button">Cancellation Flexibility</p>
        <p className="button">Type of Place</p>
        <p className="button">Price</p>
        <p className="button">More Filters</p>
      </div>
    </header>
  );
}

export default Header;
