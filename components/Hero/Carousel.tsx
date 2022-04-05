import React from "react";
import {Navigation,Pagination,Scrollbar,Autoplay} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";

type Props = {};

const Carousel = (props: Props) => {
  return (
    <Swiper
      className="h-80 w-80 select-none  text-black font-bold font-itim  relative"
      modules={[Navigation,Pagination,Scrollbar,Autoplay,EffectCards]}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter:true,
        disableOnInteraction: false,
      }}
      navigation
      // navigation={{nextEl:'#right-nav',prevEl:'#left-nav',lockClass:'hidden',hiddenClass:'hidden',disabledClass:'.no-nav'}}
      pagination={{clickable:true,type:"fraction",dynamicBullets:true}}
      effect={"cards"}
      grabCursor={true}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <SwiperSlide className="flex shadow-xl  rounded-xl ring-1  ring-white items-center justify-center" key={item}>
          <Image className="rounded-xl w-full h-full block object-cover" src={`/${item}.jpg`} alt="" width={400} height={400} />
        </SwiperSlide>
      ))}
      {/* <ArrowNarrowRightIcon id="right-nav" className="text-white absolute -right-20 z-10 hover:scale-110 hover:translate-x-2 top-[48%] duration-200 h-8 w-8 cursor-pointer " /> */}
      {/* <ArrowNarrowLeftIcon id="left-nav" className="absolute text-white my-auto -left-20 top-[48%] hover:scale-110 hover:-translate-x-2 duration-200 z-10 h-8 w-8 cursor-pointer " /> */}
        {/* <div className="no-nav"></div> */}
    </Swiper>
  );
};

export default Carousel;
