import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { navlinks } from './Navbar'


const OPENSEA_URL = ""
const TWIITER_URL = ""
const DISCORD_URL = ""
const INSTAGRAM_URL = ""

const FooterSection = () => {
  return (
    <section className='foter bg-purple-100'>
      <Container>
      <div className='flex flex-wrap justify-between'>
        <div>
          <h1 className='font-display text-xl font-bold text-slate-900'>KLASS 5k</h1>
          <p className='text-gray-600 text-sm'>
          Copyright@2022
          </p>
        </div>
        <div className='flex flex-col gap-2  text-slate-700'>
          {navlinks.map((item,index)=>(
            <Link key={index} href={item.href}>
              <a className='hover:text-purple-600 hover:font-medium'>{item.name}</a>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-2  text-slate-700'>
            <a className='hover:text-cyan-500 hover:font-medium' target="_blank" rel="norefferer" href={OPENSEA_URL}>
              Opensea
            </a>
            <a className='hover:text-blue-500 hover:font-medium' target="_blank" rel="norefferer" href={TWIITER_URL}>
              Twitter
            </a>
            <a className='hover:text-purple-500 hover:font-medium' target="_blank" rel="norefferer" href={DISCORD_URL}>
              Discord
            </a>
            <a className='hover:text-pink-500 hover:font-medium' target="_blank" rel="norefferer" href={INSTAGRAM_URL}>
              Instagram
            </a>
        </div>
      </div>

      </Container>
    </section>
  )
}

export default FooterSection