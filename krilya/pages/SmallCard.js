import Image from 'next/image'
import React from 'react'
import { Cairo } from 'next/font/google';


const cairo500 = Cairo({
  subsets: ["latin"],
  weight: "500",
});
const cairo700 = Cairo({
  subsets: ["latin"],
  weight: "700",
});

function SmallCard({img, name}) {
  return (
    // Left
    <div className='items-center text-center m-2 mt-5 rounded-xl hover:shadow-gray-400 bg-gray-100 cursor-pointer shadow-md hover:scale-105 transition duration-200 ease-out'>
      <div className='relative h-40 w-64'>
        <Image src={img} layout='fill' className='object-cover shadow rounded-t-xl'/>
      </div>
      <div>
        <h4 className={`text-gray-800 text-lg ${cairo700.className} py-3`}>{name}</h4>
      </div>
    </div>
  )
}

export default SmallCard