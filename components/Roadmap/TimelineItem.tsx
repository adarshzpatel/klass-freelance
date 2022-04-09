import { BadgeCheckIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

type Props = {
  text:string
  image?:string
  completed: boolean
}

const TimelineItem = ({text,image,completed}: Props) => {
  const styles = {
    container: `ml-16 ${completed == true ? "border-emerald-400" : "border-slate-600 border-dashed"} border-l-4  pl-8 pt-6 pb-10 relative `,
    heading: `my-2 text-xl md:text-2xl`,
    image: `rounded-xl bg-slate-800 `,
    bullet: `h-8 w-8 absolute bg-slate-900 top-8 border-slate-600 -left-[1.1rem] border-4 rounded-full `,    
    badgeCheck: `h-10 w-10 absolute bg-slate-900 top-[1.8rem] -left-[1.3rem] text-green-400`
  }

  return (
    <div className={styles.container}>
      <h6 className={styles.heading}>{text}</h6>
      
      {image && <Image src={image} alt="" width={300} height={300} className={styles.image} />}
      {completed != true && <div className={styles.bullet}/>}
     {completed==true && <BadgeCheckIcon className={styles.badgeCheck}/>}
    </div>
  )
}

export default TimelineItem