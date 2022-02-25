
import Countdown from '../components/PresaleCountdown';
import Navbar from '../components/Navbar';
import PresaleCountdown from '../components/PresaleCountdown';
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const styles={
  heroImageContainer:'lg:w-1/2 px-8 w-full grid grid-cols-2 gap-3 items-center justify-center ',
  heroImage:'rounded-xl'
}

export default function Home() {
  return (
    <div className='mx-auto max-w-screen-xl container'>
      <Navbar/>
      {/* Hero Section  */}
      <section className="flex flex-col lg:p-8 p-4 lg:flex-row min-h-screen items-center justify-around">
        <div className=" mt-24 lg:mt-0 lg:w-1/2 w-full">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gray-800">The Klass Project</h1>
          <p className="text-xl text-gray-600 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, reiciendis sit! Quis veritatis facilis ipsam pariatur quia </p>
          
          <button className="relative px-4 font-medium  hover:shadow-xl active:shadow-lg bg-yellow-400  rounded-xl hover:bg-yello-300 active:bg-yellow-500 py-2 transition duration-300 ease-out">Go to mint</button>
        </div>
        <div className={styles.heroImageContainer}>
          <div className='flex flex-col gap-3 relative top-8'>
            <Tilt glareEnable={true}>
              <Image className={styles.heroImage} src='/image1.jpg' alt='image' width={260} height={260} />
            </Tilt>
            <Tilt glareEnable={true}>
              <Image className={styles.heroImage} src='/image2.jpg' alt='image' width={260} height={260} />
            </Tilt>
          </div>
          <div className='flex flex-col gap-3'>
            <Tilt glareEnable={true}>
              <Image className={styles.heroImage} src='/image3.jpg' alt='image' width={260} height={260} />
            </Tilt>
            <Tilt glareEnable={true}>
              <Image className={styles.heroImage} src='/image4.jpg' alt='image' width={260} height={260} />
            </Tilt>
          </div>
        </div>
      </section>
      {/* Countdown */}
      {/* Gallery */}
      <section id='#gallery'>

      </section>
      {/* Team */}
      <section id="team"></section>
      {/* Roadmap */}
      <section id="roadmap"></section>
      {/* About */}
      <section id="about"></section>
      {/* Footer */}
      <footer id="footer">

      </footer>
    </div>
  )
}
