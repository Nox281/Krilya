import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Slider from "react-slick";

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="block sm:flex sm:pr-3 hover:bg-white mb-3 rounded-lg border-y border-gray-300 cursor-pointer hover:opacity-90 hover:shadow-lg transform transition duration-150">
      <div className="relative h-52 w-full sm:h-32 sm:w-56 xl:h-40 xl:w-60 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-md transform transition duration-150 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow pl-2 sm:pl-5 justify-between -mt-1">
        <div className="flex justify-between items-end">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer mt-2 mr-2" />
        </div>

        <p className="text-2xl font-extrabold">{title}</p>

        <div className="relative justify-between text-end px-2 sm:px-0">
          <p className="flex items-center justify-end gap-x-1 ">
            <StarIcon className="h-5 text-fuchsia-600" />
            {star}
          </p>

          <div>
            <p className="text-md font-bold text-lg">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
