import React from "react";
import Container from "./Container";
import Image from 'next/image';

type Props = {};

const roadmapData = [{}, {}, {}, {}];

const RoadmapSection = (props: Props) => {
  return (
    <section>
      <Container>
          <h1 className="text-5xl font-bold font-display text-gray-800">Roadmap</h1>
        <div className="flex justify-around p-4 lg:p-8 ">
          <div className="lg:flex hidden items-center p-8">
            <div className="relative rotate-6">
          <Image className="rounded-2xl" src='/image1.jpg' alt='image' height={250} width={250}/>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center py-16">
      
              <div
                className="relative border-l-2 p-8 border-orange-500"
              >
                <h1 className="text-xl  font-medium">Roadmap</h1>
                <p className="text-sm text-gray-500">
                  Description if needed
                </p>
                <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-orange-500"></div>
              </div>
              <div
                className="relative border-l-2 p-8 border-orange-500"
              >
                <h1 className="text-xl  font-medium">Roadmap</h1>
                <p className="text-sm text-gray-500">
                  Description if needed
                </p>
                <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-orange-500"></div>
              </div>
              <div
                className="relative border-l-2 p-8 border-orange-500"
              >
                <h1 className="text-xl  font-medium">Roadmap</h1>
                <p className="text-sm text-gray-500">
                  Description if needed
                </p>
                <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-orange-500"></div>
              </div>
              <div
                className="relative border-l-2 p-8 border-orange-500"
              >
                <h1 className="text-xl  font-medium">Roadmap</h1>
                <p className="text-sm text-gray-500">
                  Description if needed
                </p>
                <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full bg-orange-500"></div>
              </div>
           
          </div>
          <div className="lg:flex hidden items-center p-8">
            <div className="relative  -rotate-12">
          <Image className="rounded-2xl  " src='/image3.jpg' alt='image' height={250} width={250}/>
          </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default RoadmapSection;
