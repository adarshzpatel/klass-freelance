import React from "react";
import { Disclosure,Transition } from "@headlessui/react";
import Heading from "../Heading";
import TimelineItem from "./TimelineItem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Container from "../Container";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="min-h-screen">
      <Container>

      <Heading text="Roadmap" />
      <div className="pt-16">
        <TimelineItem
          text="1. Discord opens at 1k verified members."
          completed={true}
          image="/roadmap/phase1.jpg"
        />
        <TimelineItem
          text="2. Team introduction & Community Growth."
          completed={true}
          image="/roadmap/phase2.jpg"
        />
        <TimelineItem
          text="3. Smart contract audit."
          completed={false}
          image="/roadmap/phase3.jpg"
        />
    
        <Disclosure>
          {({open}) => (
<>
              
<Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

            <Disclosure.Panel>
            <TimelineItem
              text="4. Klass NFT Genesis collection presale. 200 KLass NFT Launched & minted."
              completed={false}
              image="/roadmap/phase4.jpg"
            />
            <TimelineItem
              text="5. Implementation of Rarities and attributes."
              completed={false}
              image="/roadmap/phase5.jpg"
            />
            <TimelineItem
              text="6. Merch Voting."
              completed={false}
              image="/roadmap/phase6.jpg"
              />
            <TimelineItem
              text="7. 20% of our total sales goes to charity wallet."
              completed={false}
              image="/roadmap/phase7.jpg"
              />
            <TimelineItem
              text="8. Passive Income Introduced."
              completed={false}
              image="/roadmap/phase8.jpg"
              />
            <TimelineItem
              text="8. Advanced Programme activated."
              completed={false}
              image="/roadmap/phase9.jpg"
              />
          </Disclosure.Panel>
            </Transition>
            <Disclosure.Button  className="flex mx-auto my-8 gap-2 items-center text-xl font-display italic bg-slate-800 hue-rotate-0 ">
              {!open ? "Show full roadmap" : "Show less"} 
              {open ? <ChevronUpIcon className="h-6 w-6"/> : <ChevronDownIcon className="h-6 w-6"/>}
            </Disclosure.Button>
        </>
        )}
        </Disclosure>
      </div>
          </Container>
      </section>
  );
};

export default RoadmapSection;
