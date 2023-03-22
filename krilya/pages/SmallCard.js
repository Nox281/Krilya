import Image from 'next/image'
import React from 'react'

function SmallCard({img, name, model}) {
  return (
    <div className="h-16 w-16">
      <h1>
        {name} {model}
      </h1>
      <Image
        src="https://nox281.github.io/Krilya/krilya/public/fiesta.jpg"
        layout="fill"
        className="rounder-lg"
      />
    </div>
  );
}

export default SmallCard