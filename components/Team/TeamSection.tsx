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
      <ProfileCard name="Kaycee" pfp="/1.jpg" role="Founder" />
      <ProfileCard name="Maxi" pfp="/23.jpg" role="Co-founder" />
      <ProfileCard name="Remi" pfp="/26.jpg" role="Co-Founder / Artist" />
      <ProfileCard name="Adarsh" pfp="/33.jpg" role="Co-Founder / Engineer" />
      <ProfileCard name="Chinu" pfp="/1.jpg" role="Project Manager" />
      <ProfileCard name="Ranza" pfp="/26.jpg" role="Head Mod" />
      <ProfileCard name="Vivian" pfp="/33.jpg" role="Collab Manager" />
      </div>
      </Container>
    </section>
  );
};

export default TeamSection;
