import Image from 'next/image'
import React from 'react'

function SmallCard({img, name, model}) {
  return (
    // Left
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
      <div className='relative h-16 w-24'>
        <Image src={img} layout='fill' className='rounded-lg'/>
      </div>
      <div>
        <h4 className='text-gray-500 font-semibold'>{name}</h4>
        <h2 className='text-gray-600 font-semibold text-lg'>{model}</h2>
      </div>
    </div>

    // Right
    
  )
}

export default SmallCard