import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Carousel } from "flowbite-react";

const poppins300 = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div
      className={`${poppins300.className} block sm:flex sm:pr-3 hover:bg-white mb-3 rounded-lg border sm:border-y mr-2 md:mr-2 border-gray-300 cursor-pointer hover:opacity-90 hover:shadow-lg transform transition duration-150`}
    >
      <div className="relative h-52 w-full sm:h-36 sm:w-56 xl:h-40 xl:w-60 flex-shrink-0">
        <Carousel>
          {img.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                height={1000}
<<<<<<< HEAD
                width={1500}
<<<<<<< HEAD
                className=" object-cover h-52 sm:h-36 sm:w-56 xl:h-40 xl:w-72"
=======
                width={1000}
                className="inline-flex flex-shrink-0 h-auto w-screen rounded-md object-fit text-center"
>>>>>>> parent of ffaf64a (m)
=======
                className=" object-cover h-52 sm:h-36 sm:w-56 xl:h-40 xl:w-72 rounded-md"
>>>>>>> parent of 2ae588e (added login modal, different carousel)
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col flex-grow pl-2 sm:pl-5 justify-between ">
        <div className="flex justify-between items-end">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer mt-2 mr-2 sm:mr-0" />
        </div>

        <p
          className={`text-2xl font-extrabold sm:-mt-4 lg:-mt-7 ${poppins600.className}`}
        >
          {title}
        </p>

        <div className="relative justify-between text-end px-2 sm:px-0">
          <p className="flex items-center justify-end gap-x-1 ">
            <StarIcon className="h-5 text-fuchsia-600" />
            {star}
          </p>

          <div>
            <p className="font-bold text-xl">{price}</p>
            <p className="text-sm font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
