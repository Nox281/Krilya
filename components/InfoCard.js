import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Slider from "react-slick";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex pr-3 hover:bg-white mb-3 rounded-lg border-y border-gray-300 cursor-pointer hover:opacity-90 hover:shadow-lg transform transition duration-150">
      <div className="relative h-24 w-40 md:h-32 md:w-56 xl:h-40 xl:w-60 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-md transform transition duration-150 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer" />
        </div>

        <p className="text-xl font-bold">{title}</p>

        <div className="flex justify-between pt-5 items-end">
          <p className="flex items-center gap-x-1">
            <StarIcon className="h-5 text-fuchsia-400" />
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
