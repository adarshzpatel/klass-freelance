import Image from 'next/image'
import React from 'react'

type Props = {
  name:string ,
  pfp:string,
  role:string
}

const ProfileCard = ({name,pfp,role}: Props) => {
  return (
    <div className=' group rounded-xl max-w-fit hover:scale-105 active:scale-95 duration-200 hover:bg-slate-700 overflow-hidden hover:shadow-xl  shadow-purple-600  p-4  cursor-pointer b bg-slate-800 '>
      <div className='relative h-48 md:h-64  rounded-xl overflow-hidden aspect-square'>
      <Image src={pfp} className=' h-full w-full' alt={name} layout="fill"/>
      </div>
      <h6 className='text-center uppercase font-bold  tracking-wider text-lg sm:text-xl md:text-2xl font-display  mt-2'>{name}</h6>
      <p className='text-center uppercase text-gray-400'>{role}</p>
    </div>)
}
export default ProfileCard;