import React from "react";
import HeroTitle from "./HeroTitle";
import Carousel from "./Carousel";
import Container from "../Container";
const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-t  from-slate-900 ">
      <Container>
      <div className="flex flex-col md:flex-row  gap-8  items-center justify-center md:justify-between min-h-screen">
        <HeroTitle/>
        <Carousel/>
      </div>
      </Container>
    </section>
  );
};

export default HeroSection;
