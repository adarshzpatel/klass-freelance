import React from "react";

type Props = {};

const ImageGallery = (props: Props) => {
  return (
    <div className="grid col-span-2  max-w-fit mx-auto  grid-cols-2 grid-rows-2 gap-4">
      <div className="rounded-xl shadow-xl max-h-[250px] max-w-[250px] hover:scale-105 hover:shadow-2xl duration-150 overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/987390683994279956/IMG-20220617-WA0036.jpg?width=620&height=623"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl  max-h-[250px] max-w-[250px] shadow-xl hover:scale-105 hover:shadow-2xl duration-150 overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/987390683717439558/IMG-20220617-WA0037.jpg?width=626&height=623"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl max-h-[250px] max-w-[250px]  duration-150 shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/987390684292063252/IMG-20220617-WA0035.jpg?width=630&height=623"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="rounded-xl max-h-[250px] max-w-[250px] duration-150 shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden">
        <img
          src="https://media.discordapp.net/attachments/972372303352594442/987390819956846593/IMG-20220617-WA0032.jpg?width=625&height=623"
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
