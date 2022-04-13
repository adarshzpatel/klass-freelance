import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container";
import Heading from "../Heading";
import ProfileCard from "./ProfileCard";

type Member = {
  name: string;
  role: string;
  twitter: string;
  image: string;
};

const TeamSection = () => {
  return (
    <section id="team" className="my-16">
      <Container>

      <Heading text="Meet the team" />
      <div className="flex gap-4 mt-16 flex-wrap justify-center">
      <ProfileCard name="Kaycee" pfp="/team/Kaycee.jpg" role="Co-founder / CEO" />
      <ProfileCard name="Maxi" pfp="/team/maxi.jpg" role="Co-founder / Artist" />
      <ProfileCard name="Adarsh" pfp="/team/Adarsh.jpg" role="Co-Founder / Engineer" />
      <ProfileCard name="Remi" pfp="/team/Remi.jpg" role="Artist" />
      <ProfileCard name="Chinu" pfp="/team/project.jpg" role="Project Manager" />
      <ProfileCard name="Ranza" pfp="/team/mod.jpg" role="Head Mod" />
      <ProfileCard name="Vivian" pfp="/team/Collab.jpg" role="Collab Manager" />
      </div>
      </Container>
    </section>
  );
};

export default TeamSection;
