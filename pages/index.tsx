import Countdown from "../components/PresaleCountdown";
import Navbar from "../components/Navbar/Navbar";

import TeamSection from "../components/Team/TeamSection";
import HeroSection from "../components/Hero/HeroSection";
import RoadmapSection from "../components/Roadmap/RoadmapSection";
import FooterSection from "../components/Footer/FooterSection";
import GallerySection from "../components/Gallery/GallerySection";
import Container from "../components/Container";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeroSection />
        <RoadmapSection />
        <GallerySection />
        <TeamSection />
      </Container>
      <FooterSection />
    </div>
  );
}
