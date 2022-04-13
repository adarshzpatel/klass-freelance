import React from "react";
import Container from "../Container";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="mb-12 text-slate-200 font-display text-lg italic">
            <h1 className="font-bold mb-16 italic text-slate-50 text-2xl md:text-4xl">
              About Klass Project
            </h1>
            <p className="pt-4">
              Klass is a unique digitally drawn stick art. They are currently
              the hottest stick kids in the Ethereum blockchain.
            </p>
            <br />
            <p>
              Team Klass wanted to create something unique, funny, crazy and at
              the same time educative. We came up with the stick man, we had
              other amazing 3D artwork but we picked up the stick art after
              meeting with the team on several occasions, it fits the profile of
              what we were searching for..
            </p>
            <br />
            <p>We made art for every career.</p>
            <br />
            <p>
              Sports people, Engineers, musicians, Teachers and many more just
              pick the art that best represents you or pick the one that
              represents the place or career you want to take up. You can also
              pick because it{"'"}s cute and you like it.This is actually what art
              was meant to serve as.{" "}
            </p>
            <br />
            <p>
              People collect arts for different reasons, it could be because
              they love it or because it speaks to them.
            </p>
          </div>
          <div className="">
            <div className="relative rounded-xl overflow-hidden h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 bg-slate-700  ">
              <Image src="/animation.gif" layout="fill" alt="" className="absolute" />
            </div>
           
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
