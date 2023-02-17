import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full space-x-2">
      <Image
        src="/osomware.png"
        width={40}
        height={40}
        quality={100}
        className="rounded-2xl"
        alt="Profile"
        blurDataURL="/osomware.png"
        placeholder="blur"
      />
      <h1 className="font-raleway text-4xl text-white">SoftxCulture</h1>
    </div>
  )
}

export default Logo