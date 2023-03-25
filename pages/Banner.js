import React, { useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

function Banner() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="select-none relative h-fit flex justify-center py-32 transform transition-all duration-300">
      <Image
        src="https://i.imgur.com/SgJ4vuf.png"
        layout="fill"
        objectFit="cover"
      />

      <div className="relative  z-40 rounded-3xl focus-within:shadow-xl focus:bg-opacity-10  transform transition duration-500">
        <div className="flex rounded-full shadow-lg bg-gray-100 p-1 pt-1.5 hover:bg-white focus-within:shadow-xl sm:focus-within:w-auto focus-within:bg-white transform transition duration-210 ease-out">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search a Car"
            className="h-7 text-md placeholder-gray-400 text-gray-900 pl-4 outline-none bg-transparent w-10/12 transform duration-500"
          />
          <SearchIcon className="inline h-8 cursor-pointer ml-auto text-white bg-fuchsia-400 rounded-full p-1.5 mx-0.5 mb-0.5" />
        </div>
        {searchInput && (
          <div className="rounded-2xl overflow-hidden transition-opacity duration-500 mt-4">
            <DateRange 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#e879f9"]}
              onChange={handleSelect}
              className="transform transition duration-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
