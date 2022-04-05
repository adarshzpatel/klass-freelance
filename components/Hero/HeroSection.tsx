import React from "react";
import HeroTitle from "./HeroTitle";
import Carousel from "./Carousel";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="oveflow-hidden">
      <div className="flex flex-wrap lg:gap-4  items-center justify-around  min-h-screen  ">
        <HeroTitle/>
        <Carousel/>
      </div>
    </section>
  );
};

export default HeroSection;
