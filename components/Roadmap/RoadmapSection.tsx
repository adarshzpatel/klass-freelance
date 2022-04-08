import React from "react";
import Heading from "../Heading";
type Props = {};

const RoadmapSection = (props: Props) => {
  return (
    <section id="roadmap" className="min-h-screen">
      <Heading text="Roadmap" />
      <div>
        <TimelineItem/>
      </div> 
    </section>
  );
};

export default RoadmapSection;
