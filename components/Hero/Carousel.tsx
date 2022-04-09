import React from "react";
import {Autoplay,EffectFade} from "swiper"
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"; 
import Image from "next/image";

type Props = {};

const Carousel = (props: Props) => {
  const array = new Array(10).fill(-1);
  return (
    <div>

    <Swiper
      className=" w-64 md:w-96 h-64 md:h-96 select-none text-gray-900  font-bold   relative"
      modules={[Autoplay,EffectFade]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      effect='fade'
      grabCursor={true}
      >
      {array.map((item,index) => (
        <SwiperSlide className="flex  rounded-xl ring-1 ring-stone-800 bg-stone-100 text-slate-700   items-start " key={item}>
          <div className="relative  ring-1 ring-opacity-75 ring-stone-900 rounded-xl overflow-hidden h-64 w-64 md:h-96 md:w-96">
          <Image className="w-full h-full block  " src={`/${index+1}.jpg`} alt="" layout="fill" />
          </div>
        </SwiperSlide>
      ))}

 
    </Swiper>
      </div>
  )
};

export default Carousel;
