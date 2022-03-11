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
    <section className='bg-gradient-to-t from-slate-900  pt-8  '>
      <Container>
      <div className='flex flex-wrap justify-between'>
        <div>
          <h1 className='font-display text-xl font-bold text-slate-50'>KLASS 5k</h1>
          <p className='text-gray-400 text-sm'>
          Copyright@2022
          </p>
        </div>
        <div className='flex flex-col gap-2  text-slate-200'>
          {navlinks.map((item,index)=>(
            <Link key={index} href={item.href}>
              <a className='hover:text-orange-400 hover:font-medium'>{item.name}</a>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-2  text-slate-200'>
            <a className='hover:text-cyan-500 hover:font-medium' target="_blank" rel="noreferrer" href={OPENSEA_URL}>
              Opensea
            </a>
            <a className='hover:text-blue-400 hover:font-medium' target="_blank" rel="noreferrer" href={TWIITER_URL}>
              Twitter
            </a>
            <a className='hover:text-purple-400 hover:font-medium' target="_blank" rel="noreferrer" href={DISCORD_URL}>
              Discord
            </a>
            <a className='hover:text-pink-400 hover:font-medium' target="_blank" rel="noreferrer" href={INSTAGRAM_URL}>
              Instagram
            </a>
        </div>
      </div>

      </Container>
    </section>
  )
}

export default FooterSection