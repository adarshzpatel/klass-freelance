
import Countdown from '../components/PresaleCountdown';
import Navbar from '../components/Navbar';
import PresaleCountdown from '../components/PresaleCountdown';
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import TeamSection from '../components/TeamSection';
import HeroSection from '../components/HeroSection';
import RoadmapSection from '../components/RoadmapSection';
import FooterSection from '../components/FooterSection';



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
        <TeamSection/>
      {/* Roadmap */}
      <RoadmapSection/>
      {/* About */}
      <section id="about"></section>
      {/* Footer */}
      <FooterSection/>
    </div>
  )
}
