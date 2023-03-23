import React from "react";
import Image from "next/image";

function MediumCard({img, title}) {
  return (
    <div className="rounded-xl mb-2 hover:shadow-gray-400 cursor-pointer shadow-md hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-80 h-60">
        <Image
          src={img}
          layout="fill"
          className="rounded-xl object-cover hover:blur-sm transform transition duration-200 ease-in-out"
        />
      </div>
      <h3 className="absolute bottom-0 left-0 right-0 px-5 py-3 text-xl mt-3 bg-black rounded-b-xl text-white opacity-60">
        {title}
      </h3>
    </div>
  );
}

export default MediumCard;
