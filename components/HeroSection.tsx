import React from 'react'
import Container from './Container'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';


const styles={
  heroImageContainer:'lg:w-1/2 px-8 w-full grid grid-cols-2 gap-3 items-center justify-center ',
  heroImage:'rounded-xl'
}

const HeroSection = () => {
  return (
    <section className='bg-gradient-to-br from-pink-700 via-transparent'>
      <Container>
        <div className="flex flex-col lg:flex-row min-h-screen items-center justify-around">

    <div className=" mt-24 lg:mt-0 lg:w-1/2 w-full">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gray-50">The Klass 5555</h1>
      <p className="text-xl text-gray-400 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, reiciendis sit! Quis veritatis facilis ipsam pariatur quia </p>
      
      <button>Go to mint</button>
    </div>
    <div className={styles.heroImageContainer}>
      <div className='flex flex-col gap-3 relative top-8'>
        <Tilt>
          <Image className={styles.heroImage} src='/1.jpg' alt='image' width={260} height={260} />
        </Tilt>
        <Tilt>
          <Image className={styles.heroImage} src='/2.jpg' alt='image' width={260} height={260} />
        </Tilt>
      </div>
      <div className='flex flex-col gap-3'>
        <Tilt>
          <Image className={styles.heroImage} src='/3.jpg' alt='image' width={260} height={260} />
        </Tilt>
        <Tilt>
          <Image className={styles.heroImage} src='/4.jpg' alt='image' width={260} height={260} />
        </Tilt>
      </div>
    </div>
        </div>
    </Container>
  </section>
  )
}

export default HeroSection