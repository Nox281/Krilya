import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] flex justify-center">
      <Image
        src="/../public/banner2.jpg"
        layout="fill"
        objectFit="cover"
        className="blur"
      />
      <div className="relative top-24 h-fit focus-within:h-[300px] focus-within:bg-white z-40 rounded-3xl focus-within:shadow-lg transform transition duration-200">
        <div className="flex rounded-full shadow-lg bg-gray-100 p-1 pt-1.5 hover:bg-white focus-within:shadow-xl focus-within:w-screen sm:focus-within:w-[460px] focus-within:bg-white transform transition duration-210 ease-out">
          <input
            type={"text"}
            placeholder="Search a Car"
            className=" h-7 text-md placeholder-gray-400 text-gray-900 pl-4 outline-none bg-transparent w-10/12 transform transition duration-500"
          ></input>
          <SearchIcon className="inline h-8 cursor-pointer ml-auto text-white bg-fuchsia-400 rounded-full p-1.5 mx-0.5 mb-0.5" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
