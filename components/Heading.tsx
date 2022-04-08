import React from 'react'


const Heading = ({text}:{text:string}) => {
  return (
  <h1 className='text-3xl md:text-5xl  max-w-fit mx-auto tracking-wider text-center  font-display italic mb-2'>
      {text}
    </h1>
  )
}

export default Heading