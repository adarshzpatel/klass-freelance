
import Countdown from '../components/PresaleCountdown';
import Navbar from '../components/Navbar';
import PresaleCountdown from '../components/PresaleCountdown';
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import TeamSection from '../components/TeamSection';
import HeroSection from '../components/HeroSection';



export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section  */}
      <HeroSection/>
      {/* Countdown */}
      {/* Gallery */}
      <section id='#gallery'>

      </section>
      {/* Team */}
      <section id="team">
        <TeamSection/>
      </section>
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
