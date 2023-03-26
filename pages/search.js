import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
import Router, { useRouter } from "next/router";
import format from "date-fns/format";
import SearchBar from "./SearchBar";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header2 />

      <main className="flex mt-10 pl-4">
        <section className=" flex-grow pt-14 px-6">
          <p className="text-xs">400+ cars available in {range}</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Cars in {location}
          </h1>

          <div className="hidden gap-x-3 md:inline-flex mb-5 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
