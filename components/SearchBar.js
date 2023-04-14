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
  };

  const resetInput = (searchInput) => {
    setSearchInput("");
  };

  return (
    <div className="relative z-40 rounded-3xl focus:bg-opacity-10 transition-all duration-500">
      <div className="flex rounded-full border-2 bg-white p-1 pt-1.5 hover:border-teal-500 bg-opacity-85 focus-within:border-teal-500 sm:focus-within:w-auto focus-within:bg-white transition-all duration-150">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search a Car"
          className={`h-[28px] text-md selection:bg-teal-300 placeholder-gray-500 text-teal-900 pl-4 border-none bg-transparent w-10/12 ${
            searchInput && `w-full sm:mr-4`
          }`}
        />
        <SearchIcon
          className={`inline h-8 cursor-pointer ml-auto text-white bg-teal-500 rounded-full p-1.5 -mt-0.5 mx-0.25 mb-0.25 ${
            searchInput && `hidden`
          } transform transition duration-150`}
        />
      </div>
      {searchInput && (
        <div className="rounded-2xl overflow-hidden mt-4 opacity-100 border-2 transition-all duration-500">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#26A69A"]}
            onChange={handleSelect}
            className="transition-all duration-200 "
          />
          <div className="flex">
            <h2
              onClick={resetInput}
              className="hover:bg-gray-200 w-full cursor-pointer relative bg-white text-center pb-3 pt-2 transform transition duration-300 ease-out"
            >
              Cancel
            </h2>
            <h2
              onClick={handleSearch}
              className="hover:bg-gray-200 w-full cursor-pointer relative bg-white text-center pb-3 pt-2 transform transition duration-300 ease-out"
            >
              Search
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;