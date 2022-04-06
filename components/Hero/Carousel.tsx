import React from "react";
import {Navigation,Autoplay,Pagination} from "swiper"
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";

type Props = {};

const Carousel = (props: Props) => {
  const array = new Array(40).fill(-1);
  return (
    <Swiper
      className=" w-80 h-[370px]  select-none text-gray-900  font-bold   relative"
      modules={[Navigation,Autoplay,Pagination,EffectCards]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{type:'fraction'}}
      navigation={{nextEl:'#right-nav',prevEl:'#left-nav',lockClass:'hidden',hiddenClass:'hidden',disabledClass:'.no-nav'}}
      effect={"cards"}
      grabCursor={true}
    >
      {array.map((item,index) => (
        <SwiperSlide className="flex  rounded-xl ring-1 ring-stone-800 bg-stone-100 text-slate-700   items-start p-2" key={item}>
          <div className="relative  ring-1 ring-opacity-75 ring-stone-900 rounded-xl overflow-hidden h-80 w-80">
          <Image className="w-full h-full block  " src={`/${index+1}.jpg`} alt="" layout="fill" />
          </div>
        </SwiperSlide>
      ))}
      <ArrowNarrowRightIcon id="right-nav" className="text-white absolute -right-20 z-10 hover:scale-110 hover:translate-x-2 top-[48%] duration-200 h-8 w-8 cursor-pointer " />
      <ArrowNarrowLeftIcon id="left-nav" className="absolute text-white my-auto -left-20 top-[48%] hover:scale-110 hover:-translate-x-2 duration-200 z-10 h-8 w-8 cursor-pointer " />
 
    </Swiper>
  )
};

export default Carousel;
