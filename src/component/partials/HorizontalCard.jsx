import React from "react";
import SingleMoviesRow from "./SingleMoviesRow";

function HorizontalCard({ title, movies }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-2 px-4">
      <h2 className="text-xl md:text-2xl text-white font-bold py-8">
        {title.toUpperCase()}
      </h2>
      {movies?.length > 6 ? (
        <div className="flex whitespace-nowrap gap-4 overflow-x-scroll scrollbar-custom">
          {movies &&
            movies.map((movie) => (
              <SingleMoviesRow key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      ) : (
        <div className="flex whitespace-nowrap gap-4 overflow-x-scroll scrollbar-custom hide-scrollbar">
          {movies &&
            movies.map((movie) => (
              <SingleMoviesRow key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      )}
    </div>
  );
}

export default HorizontalCard;
