import React from "react";
import HorizontalCard from "./HorizontalCard";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="text-white bg-black md:px-18 w-full pb-8">
      <div className=" md:-mt-53 w-full z-100 relative">
        <HorizontalCard
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
        />
        <HorizontalCard
          title={"Popular Movies"}
          movies={movies?.popularMovies}
        />
        <HorizontalCard title={"Top Rated"} 
          movies={movies?.topRated} />
      </div>
    </div>
  );
};

export default SecondContainer;
