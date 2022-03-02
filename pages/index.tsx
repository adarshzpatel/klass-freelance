
import Countdown from '../components/PresaleCountdown';
import Navbar from '../components/Navbar';

import TeamSection from '../components/TeamSection';
import HeroSection from '../components/HeroSection';
import RoadmapSection from '../components/RoadmapSection';
import FooterSection from '../components/FooterSection';
import GallerySection from '../components/GallerySection';



export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section  */}
      <HeroSection/>
      {/* Countdown */}
      {/* Roadmap */}
      <RoadmapSection/>
      {/* Gallery */}
      <GallerySection />
      {/* Team */}
        <TeamSection/>
      {/* About */}
      <section id="about"></section>
      {/* Footer */}
      <FooterSection/>
    </div>
  )
}
