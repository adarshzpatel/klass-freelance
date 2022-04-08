import React from "react";
import HeroTitle from "./HeroTitle";
import Carousel from "./Carousel";
import Container from "../Container";
const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-t from-slate-900">
      <Container>

      <div className="flex flex-wrap lg:gap-4  items-center justify-around  min-h-screen  ">
        <HeroTitle/>
        <Carousel/>
      </div>
      </Container>
    </section>
  );
};

export default HeroSection;
