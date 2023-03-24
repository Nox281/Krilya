import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Cairo } from "next/font/google";
import Header from "./Header";
import Banner from "./Banner";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";
import LargeCard from "./LargeCard";
import Footer from "./Footer";

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Krilya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
      <Header />
      <Banner className={`relative ${poppins700.className}`} />
      <main className={`select-none max-w-7xl mx-auto px-8 sm:px16`}>
        <section className="pt-6">
          <h2 className={`text-2xl pb-5  ${poppins700.className}`}>
            Explore Cars
          </h2>
          {/* Data endpoint fetching */}

          <div className="flex space-x-4 overflow-scroll scrollbar-hide pr-3 pb-3 -ml-2 scroll-smooth">
            {exploreData?.map(({ img, name }) => (
              <SmallCard key={img} img={img} name={name} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={`text-2xl py-8 ${poppins700.className}`}>
            Search by Category
          </h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://i.imgur.com/0RmEGjn.jpg"
          title="The greatest outdoors"
          description="Wishlists curated by Krilya"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://nox281.github.io/Krilya/public/CarsData.json"
  ).then((res) => res.json());

  const cardsData = await fetch(
    "https://nox281.github.io/Krilya/public/LocationsData.json"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
