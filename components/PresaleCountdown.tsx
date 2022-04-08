import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import Heading from './Heading'
import Image from "next/image"
type Props = {}

const renderer = ({days,hours,minutes,seconds,completed}) => {
  if(completed){
    return "Presale Started"
  } else {
    return <div className='text-6xl flex gap-4 font-bold font-display '>
     
    <p className='flex flex-col items-center justify-center gap-2'> {zeroPad(days)}<span className='text-gray-300 font-normal text-2xl'> days </span> </p> :
    <p className='flex flex-col items-center justify-center gap-2'>  {zeroPad(hours)}<span className='text-gray-300 font-normal text-2xl'> hours</span> </p> : 
     <p className='flex flex-col items-center justify-center gap-2'> {zeroPad(minutes)}<span className='text-gray-300 font-normal text-2xl'> minutes </span></p> :
     <p className='flex flex-col items-center justify-center gap-2'> {zeroPad(seconds) }<span className='text-gray-300 font-normal text-2xl'> seconds </span> </p>
    </div>
  }
}

const PresaleCountdown = (props: Props) => {
  return (
    <section className='min-h-screen mt-16 flex flex-col'>
      <div className='h-full flex mt-20 flex-col md:flex-row justify-around items-center gap-8 '>
      <Image src="/18.jpg" className='rounded-xl' alt="counter-image" height={400} width={400} /> 
      <div className='relative'>
        <h6 className='text-3xl font-display z-[1] brightness-125 bg-gradient-to-r  from-orange-500 max-w-fit bg-clip-text text-transparent to to-pink-600 leading-loose'>Presale begins in</h6>
        <h6 className='text-3xl absolute top-0 blur-lg font-display bg-gradient-to-r from-orange-500 max-w-fit bg-clip-text text-transparent to to-pink-600 leading-loose'>Presale begins in</h6>
      <Countdown date={new Date("2022-05-07")} renderer={renderer} />
      </div>
      </div>
    </section>
  )
}

export default PresaleCountdown;