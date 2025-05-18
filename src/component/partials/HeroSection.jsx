import React from "react";

function HeroSection({ title, overview}) {
  return (
    <div className="w-full min-h-full md:mb-5 overflow-x-hidden aspect-video absolute text-white bg-gradient-to-r from-black z-10">
      <div className="pt-[55%] md:pt-[15%] pl-10 md:pl-36 px-12 ">
        <h1 className="font-bold  text-2xl md:text-4xl">{title}</h1>
        <p className="w-1/2 hidden md:inline-block py-6 ">{overview}</p>
        <div className="flex gap-3">
          <button className="bg-white text-black p-2 mt-7 md:mt-0 px-4 py-1 md:px-12 rounded-lg text-lg  md:text-xl">
            Play
          </button>
          <button className="bg-gray-500 text-white hidden md:inline-block p-2 px-5 rounded-lg text-xl">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
