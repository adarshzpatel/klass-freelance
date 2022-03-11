import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
type Props = {}


const imageSrcs = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/1.jpg',

]
const GallerySection = (props: Props) => {
  return (
    <section id='gallery'>
      <Container>
      <h1 className="text-4xl font-bold font-display ">Gallery</h1>
        <div className='flex flex-wrap gap-6 justify-center items py-16'>
            {imageSrcs.map((src,index)=>(
              <Tilt key={index} >

              <Image  src={src} className='object-cover object-center rounded-xl' alt='gallery-image' width={280} height={280}/>
              </Tilt>
            ))}
        </div>
      </Container>
    </section>
  )
}

export default GallerySection;