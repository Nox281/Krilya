import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image src="/../public/banner2.jpg" layout="fill" objectFit="cover" className="blur"/>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg shadow-2xl">Not Sure What Car You Want?</p>
        <button className="font-bold text-gradient-40 bg-white text-fuchsia-400 my-3 px-10 py-4 shadow-md rounded-full hover:shadow-xl hover:text-fuchsia-500 active:scale-90 transition duration-210">Surprise Me</button>
      </div>
    </div>
  );
}

export default Banner;
