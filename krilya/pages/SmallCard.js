import Image from 'next/image'
import React from 'react'

function SmallCard({img, name, model}) {
  return (
    <div className='h-16 w-16'>
      <h1>{name} {model}</h1>
      <Image src={img} layout='fill' className='rounder-lg'/>
    </div>
  )
}

export default SmallCard