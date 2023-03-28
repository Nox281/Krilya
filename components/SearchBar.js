import { React, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useRouter } from "next/router";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const search = () => {
    searchInput &&
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = () => {
    search();
    resetInput();
  }

  const resetInput = (searchInput) => {
    setSearchInput("");
  };

  return (
    <div className="relative z-40 rounded-3xl focus-within:drop-shadow focus:bg-opacity-10 transform transition duration-150">
      <div className="flex rounded-full  bg-gray-100 p-1 pt-1.5 hover:bg-white focus-within:shadow-sm sm:focus-within:w-auto focus-within:bg-white transform transition duration-100">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search a Car"
          className="h-7 text-md selection:bg-gray-300 placeholder-gray-400 text-gray-900 pl-4 outline-none bg-transparent w-10/12 "
        />
        <SearchIcon
          onClick={handleSearch}
          className={`inline h-8 cursor-pointer ml-auto text-white bg-fuchsia-500 rounded-full p-1.5 -mt-0.5 mx-0.25 mb-0.25 ${searchInput && `hover:bg-fuchsia-700`} transform transition duration-150`}
        />
      </div>
      {searchInput && (
        <div className="rounded-2xl overflow-hidden mt-4 opacity-100">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#e879f9"]}
            onChange={handleSelect}
            className="transform transition-all duration-200 "
          />
          <h2
            onClick={resetInput}
            className="hover:bg-gray-200 cursor-pointer relative bg-white text-center pb-3 pt-2 transform transition duration-150 ease-out"
          >
            Cancel
          </h2>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
