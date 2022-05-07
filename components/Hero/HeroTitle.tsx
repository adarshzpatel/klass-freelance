import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import React from 'react'
import Typewriter from "typewriter-effect"
import { OPENSEA_LINK } from '../../constants/social'
import CtaBtn from './CtaBtn'
type Props = {}

const HeroTitle = (props: Props) => {
  return (
    <div className="text-center md:text-left ">
    <h1 className="text-2xl text-slate-200  italic md:text-5xl  font-display font-semibold  mb-2 ">
      Unique Collection of
    </h1>
    <div className="relative flex md:block  justify-center">
      <h1 className=" mt-2 bg-gradient-to-r font-bold from-orange-500 max-w-fit to-pink-500 bg-clip-text text-transparent  font-display text-4xl md:text-6xl ">
        <Typewriter
          options={{
            strings: ["stick art.", "5555 NFTs."],
            skipAddStyles: true,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h1 className="absolute blur-2xl top-0 mt-2 bg-gradient-to-r font-bold from-orange-700 max-w-fit to-pink-700 bg-clip-text text-transparent  font-display text-4xl md:text-6xl ">
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
    <div className='mt-12 flex justify-center md:justify-start'>
    <CtaBtn link={OPENSEA_LINK}>
       <p className='z-[1]'> View on Opensea </p>
        <ChevronDoubleRightIcon  className='h-4 w-4 md:h-8 md:w-8 relative '/>
    </CtaBtn>
    </div>
  </div>
  )
}

export default HeroTitle