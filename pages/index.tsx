import Navbar from "../components/Navbar/Navbar";
import TeamSection from "../components/Team/TeamSection";
import HeroSection from "../components/Hero/HeroSection";
import RoadmapSection from "../components/Roadmap/RoadmapSection";
import FooterSection from "../components/Footer/FooterSection";
import GallerySection from "../components/Gallery/GallerySection";
import PresaleCountdown from "../components/PresaleCountdown";
import FaqSection from "../components/Faq/FaqSection";

export default function Home() {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <PresaleCountdown/>
        <RoadmapSection />
        <GallerySection />
        <TeamSection />
        <FaqSection/>
      <FooterSection />
    </div>
  );
}
