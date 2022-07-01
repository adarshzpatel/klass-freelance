import React from "react";

type Props = {};

const ImageGallery = (props: Props) => {
  return (
    <div className="grid col-span-2  max-w-fit mx-auto  grid-cols-2 grid-rows-2 gap-4">
      <div className="rounded-xl shadow-xl max-h-[200px] max-w-[200px] md:max-h-[250px] md:max-w-[250px] hover:scale-105 hover:shadow-2xl duration-150 overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/991316131023425597/IMG-20220628-WA0252.jpg?width=624&height=620"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl max-h-[200px] max-w-[200px] md:max-h-[250px] md:max-w-[250px] shadow-xl hover:scale-105 hover:shadow-2xl duration-150 overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/991316131291869224/IMG-20220628-WA0004.jpg?width=622&height=621"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl max-h-[200px] max-w-[200px] md:max-h-[250px] md:max-w-[250px]  duration-150 shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/991316131589672990/IMG-20220627-WA0190.jpg?width=626&height=621"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl shadow-xl max-h-[200px] max-w-[200px] md:max-h-[250px] md:max-w-[250px] hover:scale-105 hover:shadow-2xl overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/991316131845505024/IMG-20220627-WA0130.jpg?width=620&height=623"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
