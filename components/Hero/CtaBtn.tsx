import React, { ReactChildren } from 'react';
import {motion} from "framer-motion"
import Link from 'next/link';

type Props = { 
  link:string
  children:any
}

const CtaBtn = ({link,children}:Props) => {

  return (
    <Link passHref href={link}>
      <div className='relative ring-1  hover:ring-0 ring-fuchsia-500 group rounded-full overflow-hidden max-w-fit cursor-pointer '>
      <div className='w-full absolute skew-x-12 z-[0] h-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-out   bg-gradient-to-r from-violet-500 via-fuchsia-600 to-pink-400'></div>
      <a className='md:text-xl px-6 py-3 group-hover:shadow-2xl z-[1] whitespace-nowrap duration-300 items-center hover:gap-6 flex gap-2 font-display     '>
      {children}
      </a>
      </div>
    </Link>
  )
}

export default CtaBtn;