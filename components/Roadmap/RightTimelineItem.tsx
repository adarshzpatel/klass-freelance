import React from "react";

import { Children, ReactNode } from "react";

type Props = {
  phase:number
  title:string
  children:ReactNode
};


const RightTimelineItem = (props: Props) => {
  return (
    <div className="my-8 flex justify-between items-center">
    <div className="order-1 w-5/12" />
    <div className="z-10 flex items-center order-1 bg-gray-700 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto text-white font-semibold text-lg">{props.phase}</h1>
    </div>
    <div className="order-1 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-display  text-white text-2xl">{props?.title}</h3>
      <p className="text-lg leading-snug  text-gray-100">{props.children}</p>
    </div>
  </div>
  );
};

export default RightTimelineItem;