import React from 'react'
import Typewriter from "typewriter-effect"
type Props = {}

const HeroTitle = (props: Props) => {
  return (
    <div className="text-center md:text-left">
    <h1 className="text-4xl text-slate-200  italic md:text-5xl  font-display font-semibold  mb-2 ">
      Unique Collection of
    </h1>
    <div className="relative flex md:block  justify-center">
      <h1 className=" mt-2 bg-gradient-to-r font-bold from-orange-500 max-w-fit to-pink-500 bg-clip-text text-transparent  font-display text-5xl md:text-6xl ">
        <Typewriter
          options={{
            strings: ["stick art.", "5555 NFTs."],
            skipAddStyles: true,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h1 className="absolute blur-2xl top-0 mt-2 bg-gradient-to-r font-bold from-orange-700 max-w-fit to-pink-700 bg-clip-text text-transparent  font-display text-5xl md:text-6xl ">
        <Typewriter
          options={{
            strings: ["stick art.", "5555 NFTs."],
            skipAddStyles: true,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  </div>
  )
}

export default HeroTitle