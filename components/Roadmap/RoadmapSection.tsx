import React from "react";
import Heading from "../Heading";
import Timeline from "./Timeline";
type Props = {};

const roadmapData = [{}, {}, {}, {}];

const RoadmapSection = (props: Props) => {
  return (
    <section id='roadmap' className="min-h-screen">
          <Heading text="Roadmap"/>  
      <div className="flex items-center justify-center h-full">

          <Timeline/>     
      </div>
    </section>
  );
};

export default RoadmapSection;
