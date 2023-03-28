import * as React from "react";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import { useRouter } from "next/router";
import format from "date-fns/format";
import InfoCard from "@/components/InfoCard";
import "mapbox-gl/dist/mapbox-gl.css";
import SideMap from "@/components/SideMap";

const MAPBOX_TOKEN =
  "eyJ1Ijoibm94NDk5IiwiYSI6ImNsZnIxbHA0MzA0Mm8zeG54OGtudWs3bHcifQ";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate } = router.query;

  let formattedStartDate = "";
  let formattedEndDate = "";
  let range = "";

  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    range = `${formattedStartDate} - ${formattedEndDate}`;
  }
  return (
    <div>
      <Header2 />

      <main className="lg:grid lg:grid-cols-2 pl-4">
        <section className="h-screen pt-20 md:pt-[116px]">
          <div className="scrollbar-thin h-full mr-1 pr-1 md:overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scroll-smooth">
            <p className="text-xs pt-2">400+ cars available in {range}</p>

            <h1 className="text-3xl font-semibold mt-0 mb-3">
              Cars in {location[0].toUpperCase() + location.slice(1)}
            </h1>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden pt-12 md:pt-[116px] lg:flex w-full">
          <SideMap />
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://nox281.github.io/Krilya/public/availableCars.json"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
