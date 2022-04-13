import Navbar from "../components/Navbar/Navbar";
import TeamSection from "../components/Team/TeamSection";
import HeroSection from "../components/Hero/HeroSection";
import RoadmapSection from "../components/Roadmap/RoadmapSection";
import FooterSection from "../components/Footer/FooterSection";
import GallerySection from "../components/Gallery/GallerySection";
import PresaleCountdown from "../components/PresaleCountdown";
import FaqSection from "../components/Faq/FaqSection";
import AboutSection from "../components/About/AboutSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Klass Project | 5555 unique stick NFTs </title>
        <meta name="description" content="The Klass Project is a collection of 5555 unique stick art NFTs. FREE Mint for whitelisted members , join Discord and get whitelisted..." />
      </Head>
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
