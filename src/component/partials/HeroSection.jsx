import React from "react";

function HeroSection({ title, overview, id }) {
  return (
    <div className="w-screen max-w-full overflow-x-hidden aspect-video absolute text-white bg-gradient-to-r from-black z-10">
      <div className="pt-[15%] pl-36 px-12 ">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="w-1/2 py-6 text-lg ">{overview}</p>
        <div className="flex gap-3">
          <button className="bg-white text-black p-2 px-12 rounded-lg text-xl">
            Play
          </button>
          <button className= "bg-gray-500 text-white p-2 px-5 rounded-lg text-xl">
            More Info
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default HeroSection;
