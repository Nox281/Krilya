import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className="select-none relative h-fit flex justify-center py-32 transform transition-all duration-300">
      <Image
        src="https://i.imgur.com/SgJ4vuf.png"
        layout="fill"
        objectFit="cover"
      />

      <SearchBar />
    </div>
  );
}

export default Banner;
