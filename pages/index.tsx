import Navbar from "../components/Navbar/Navbar";
import TeamSection from "../components/Team/TeamSection";
import HeroSection from "../components/Hero/HeroSection";
import RoadmapSection from "../components/Roadmap/RoadmapSection";
import FooterSection from "../components/Footer/FooterSection";
import GallerySection from "../components/Gallery/GallerySection";
import PresaleCountdown from "../components/PresaleCountdown";
import FaqSection from "../components/Faq/FaqSection";
import AboutSection from "../components/About/AboutSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="bg">
        <HeroSection />
        <PresaleCountdown/>
      </ div>
        <RoadmapSection />
        <GallerySection />
        <TeamSection />
        <FaqSection/>
        <AboutSection/>
      <FooterSection />
    </div>
  );
}
